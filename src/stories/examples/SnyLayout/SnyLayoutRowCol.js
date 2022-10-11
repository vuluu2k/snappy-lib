import React from 'react';
import { SnyContainer, SnyRow, SnyCol } from 'snappy';

function Example(props) {
  return (
    <SnyContainer>
      <h3>xs=&ldquo;2&ldquo;</h3>
      <SnyRow xs="2">
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
      </SnyRow>
      <h3>xs=&ldquo;3&ldquo;</h3>
      <SnyRow xs="3">
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
      </SnyRow>
      <h3>xs=&ldquo;4&ldquo;</h3>
      <SnyRow xs="4">
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
      </SnyRow>
      <h3>xs=&ldquo;4&ldquo;</h3>
      <SnyRow xs="4">
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border" xs="6">
          xs=&ldquo;6&ldquo;
        </SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
      </SnyRow>
      <h3>xs=&ldquo;1&ldquo; sm=&ldquo;2&ldquo; md=&ldquo;4&ldquo;</h3>
      <SnyRow xs="1" sm="2" md="4">
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
        <SnyCol className="example border">SnyColumn</SnyCol>
      </SnyRow>
    </SnyContainer>
  );
}

export default Example;
