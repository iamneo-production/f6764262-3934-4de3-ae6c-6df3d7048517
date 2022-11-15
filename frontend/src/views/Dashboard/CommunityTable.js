import React from "react";

// Chakra imports
import { Button, Flex, Text } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BillingRow from "components/Tables/BillingRow";

// Data
import { billingData } from "variables/general";

function Tables() {
  return (
    <>
      <Card my={{ lg: "60px" }} me={{ lg: "24px" }}>
        <Flex
          direction="column"
          justify="space-between"
          align="center"
          minHeight="60px"
          w="100%"
        >
          <CardHeader py="12px">
            <Flex
              justify="space-between"
              align="center"
              minHeight="60px"
              w="100%"
            >
              <Text color="#fff" fontSize="lg" fontWeight="bold">
                Community Name : Srijan's Community
              </Text>
              <Button maxW="135px" fontSize="10px" variant="brand">
                Add Member
              </Button>
            </Flex>
          </CardHeader>
          <Text
            color="#fff"
            fontSize="md"
            fontWeight="bold"
            alignContent={"left"}
          >
            Community ID: KII632OP
          </Text>
          <CardBody>
            <Flex direction="column" w="100%">
              {billingData.map((row) => {
                return (
                  <BillingRow
                    name={row.name}
                    company={row.company}
                    email={row.email}
                    number={row.number}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Flex>
      </Card>
    </>
  );
}

export default Tables;
