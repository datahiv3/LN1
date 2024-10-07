import React from "react";

import CentralPage from "../components/Layout/CentralPage";
import Link from "../components/Layout/Link";

const NotFound: React.FC = () => {
  return (
    <CentralPage>
      <div>Page Not Found</div>
      <div>
        You can come back to the <Link to="/">home page</Link>
      </div>
    </CentralPage>
  );
};

export default NotFound;
