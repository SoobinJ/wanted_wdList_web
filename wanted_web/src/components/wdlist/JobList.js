import React from "react";
import styled from "styled-components";
import JobListContent from "./JobListContent";
import JobListNav from "./JobListNav";

export default function JobList() {
  return (
    <JobListWrapper>
      <JobListNav></JobListNav>
      <JobListContent></JobListContent>
    </JobListWrapper>
  );
}

const JobListWrapper = styled.div`
    background::#fff;
    min-height:calc(100vh - 50px);
`;
