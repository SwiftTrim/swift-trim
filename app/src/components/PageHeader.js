export default function PageHeader({ firstText, secondText }) {
    return (
      <h2 className="page-header">
        <span className="page-header-first">{firstText}</span>{" "}
        <span className="page-header-second">{secondText}</span>
      </h2>
    );
  }