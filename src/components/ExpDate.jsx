import { useEffect } from "react";

const ExpDate = (props) => {

  useEffect(() => {
    const savedMonth = localStorage.getItem("month");
    const savedYear = localStorage.getItem("year");
    const savedCvc = localStorage.getItem("cvc");

    if (savedMonth) props.setMonth(savedMonth);
    if (savedYear) props.setYear(savedYear);
    if (savedCvc) props.setCvc(savedCvc);
  }, [])

  const handleMonth = (event) => {
    let value = event.target.value.replace(/\D/g, "").slice(0, 2);
    props.setMonth(value);
    localStorage.setItem("month", value);

    if (!value) {
      props.setErrors((prev) => ({ ...prev, month: "Can't be blank" }));
    } else if (value > 12 || value <= 0) {
      props.setErrors((prev) => ({ ...prev, month: "Invalid Date" }));
    } else {
      props.setErrors((prev) => ({ ...prev, month: "" }));
    }
  };

  const handleYear = (event) => {
    let value = event.target.value.replace(/\D/g, "").slice(0, 2);
    props.setYear(value);
    localStorage.setItem("year", value);

    if (!value) {
      props.setErrors((prev) => ({ ...prev, year: "Can't be blank" }));
    } else {
      props.setErrors((prev) => ({ ...prev, year: "" }));
    }
  };

  const handleCVC = (event) => {
    let value = event.target.value.replace(/\D/g, "").slice(0, 3);
    props.setCvc(value);
    localStorage.setItem("cvc", value);

    if (!value) {
      props.setErrors((prev) => ({ ...prev, cvc: "Can't be blank" }));
    } else {
      props.setErrors((prev) => ({ ...prev, cvc: "" }));
    }
  };

  return (
    <div className="exp-date-container">
      <div className="month-year-container">
        <label className="label-name">EXP. DATE (MM/YY)</label>
        <div className="months-container">
          <div className={`month-input ${props.errors.month && "error-state"}`}>
            <input
              type="number"
              placeholder="MM"
              value={props.month}
              onChange={handleMonth}
            />
          </div>
          <div className={`year-input ${props.errors.year && "error-state"}`}>
            <input
              type="number"
              placeholder="YY"
              value={props.year}
              onChange={handleYear}
            />
          </div>
        </div>
        <div className="exp-error-container space-grotesk">
          {props.errors.month === "Can't be blank" && props.errors.year === "Can't be blank" ? (
            <p className="error-text">Can't be blank</p>
          ) : (
            <>
              {props.errors.month && <p className="error-text">{props.errors.month}</p>}
              {props.errors.year && <p className="error-text">{props.errors.year}</p>}
            </>
          )}
        </div>
      </div>

      <div className="cvc-container">
        <label className="label-name">CVC</label>
        <div className={`cvc-input ${props.errors.cvc && "error-state"}`}>
          <input
            type="number"
            placeholder="e.g. 123"
            value={props.cvc}
            onChange={handleCVC}
          />
        </div>
        <div className="cvc-error-container space-grotesk">
          {props.errors.cvc && <p className="error-text">{props.errors.cvc}</p>}
        </div>
      </div>
    </div>
  );
};

export default ExpDate;
