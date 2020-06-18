import React from "react";

import Text from "./Text";

// css
import "../../../bootstrap.scss";

const TextCosmos = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text label="xs" fontSize="xs" />
      <Text label="sm" fontSize="sm" />
      <Text label="base" />
      <Text label="md" fontSize="md" />
      <Text label="lg" fontSize="lg" />
      <Text label="xl" fontSize="xl" />
      <Text label="white" fontSize="xl" />
      <Text label="gray" fontSize="xl" color="gray" />
      <Text label="lightgray" fontSize="xl" color="lightgray" />
      <Text label="bold" fontSize="xl" weight="bold" />
      <Text
        label="lightgray bold"
        fontSize="xl"
        color="lightgray"
        weight="bold"
      />
    </div>
  );
};

export default TextCosmos;
