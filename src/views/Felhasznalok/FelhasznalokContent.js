import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";

import Services from "./Services";

function FelhasznalokContent() {
  const [usersJson, setUsersJson] = useState([]);
  const [hasTwoPrimes, setHasTwoPrimes] = useState(false);
  let primes = [];

  useEffect(() => {
    if (window.location.pathname === "/felhasznalok") {
      getUsers();
      primeFactorsTo(99);
    }
  }, [window.location.pathname]);

  function primeFactorsTo(max) {
    let primeNumbers = [];
    let numbers = [];
    for (let i = 2; i <= max; ++i) {
      if (!numbers[i]) {
        primeNumbers.push(i + "");
        for (let j = i << 1; j <= max; j += i) {
          numbers[j] = true;
        }
      }
    }
    primes = primeNumbers;
  }

  const isPrime = (irszam) => {
    let type = typeof irszam;
    let counter = 0;
    let isTrue = false;
    switch (type) {
      case "string": {
        irszam.replace(/\s/g, "");
        primes.forEach((item) => {
          if (irszam.includes(item)) {
            counter++;
            if (counter >= 2) {
              isTrue = true;
            } else {
              isTrue = false;
            }
          }
        });
      }
    }
    return isTrue;
  };

  const getUsers = () => {
    let results = "100";
    let users = [];
    Services.getUsers(results, null).then((res) => {
      for (const [key, value] of Object.entries(res.results)) {
        if (
          (value && typeof value !== "undefined") ||
          typeof value !== "boolean"
        ) {
          if (typeof value.location.postcode === "string") {
            if (isPrime(value.location.postcode.replace(/\s/g, ""))) {
              users.push(value);
            }
          } else if (typeof value.location.postcode === "number") {
            if (isPrime(value.location.postcode + "")) {
              users.push(value);
            }
          }
        }
      }
      setUsersJson(users);
    });
  };

  const nevFormatter = (title, row) => {
    return title + " " + row.name.first + " " + row.name.last;
  };

  const cimFormatter = (street, row) => {
    return street + " " + row.location.street.number;
  };

  const genderFormatter = (gender) => {
    switch (gender) {
      case "male":
        return "Férfi";
      case "female":
        return "Nő";
    }
  };

  const renderUsersTable = () => {
    const selectOptions = {
      male: "Férfi",
      female: "Nő",
    };

    const options = {
      sizePerPage: 10,
      nextPageTitle: "Következő oldal",
      prePageTitle: "Előző oldal",
      firstPageTitle: "Első oldal",
      lastPageTitle: "Utolsó oldal",
    };

    const columns = [
      {
        dataField: "name.title",
        text: "Teljes név",
        formatter: nevFormatter,
      },
      {
        dataField: "gender",
        text: "Nem",
        filter: selectFilter({
          options: selectOptions,
          placeholder: "Összes",
        }),
        formatter: genderFormatter,
      },
      {
        dataField: "location.postcode",
        text: "Irányítószám",
      },
      {
        dataField: "location.city",
        text: "Helységnév",
      },
      {
        dataField: "location.street.name",
        text: "Cím",
        formatter: cimFormatter,
      },
      {
        dataField: "login.uuid",
        text: "Id",
        hidden: true,
      },
    ];
    return (
      <BootstrapTable
        id="bstable"
        bootstrap4
        keyField="login.uuid"
        data={usersJson}
        columns={columns}
        filter={filterFactory()}
        pagination={paginationFactory(options)}
      />
    );
  };

  return (
    <div className="content-fluid__content">
      <div>{renderUsersTable()}</div>
    </div>
  );
}

export default FelhasznalokContent;
