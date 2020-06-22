import * as React from "react";

import Text from "./Text";

// css
import "../../../bootstrap.scss";

const TextCosmos = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text textLabel="xs" fontSize="xs" />
      <Text textLabel="sm" fontSize="sm" />
      <Text textLabel="base" />
      <Text textLabel="md" fontSize="md" />
      <Text textLabel="lg" fontSize="lg" />
      <Text textLabel="xl" fontSize="xl" />
      <Text textLabel="white" fontSize="xl" />
      <Text textLabel="gray" fontSize="xl" color="gray" />
      <Text textLabel="lightgray" fontSize="xl" color="lightgray" />
      <Text textLabel="bold" fontSize="xl" weight="bold" />
      <Text
        textLabel="lightgray bold"
        fontSize="xl"
        color="lightgray"
        weight="bold"
      />
    </div>
  );
};

export default TextCosmos;
