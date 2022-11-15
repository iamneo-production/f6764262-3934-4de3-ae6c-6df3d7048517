import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  Icon,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";

const CommunityCard = () => {
  return (
    <>
      {/* <div>CommunityCard</div> */}
      <h1>hello</h1>
      <Card>
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Stat me="auto">
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb="2px"
              >
                My Balance
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color="#fff">
                  $53,000
                </StatNumber>
                <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  color="green.400"
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                >
                  +55%
                </StatHelpText>
              </Flex>
            </Stat>
            <IconBox as="box" h={"45px"} w={"45px"} bg="brand.200">
              <WalletIcon h={"24px"} w={"24px"} color="#fff" />
            </IconBox>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default CommunityCard;
