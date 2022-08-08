import React from 'react';
import { SnyContainer, SnyRow, SnyCol } from 'snappy';

function Example(props) {
  return (
    <SnyContainer style={{ width: '100%' }}>
      <SnyRow>
        <SnyCol className="border mb-4">.Snycol</SnyCol>
      </SnyRow>
      <SnyRow>
        <SnyCol className="border mb-4">.Snycol</SnyCol>
        <SnyCol className="border mb-4">.Snycol</SnyCol>
        <SnyCol className="border mb-4">.Snycol</SnyCol>
        <SnyCol className="border mb-4">.Snycol</SnyCol>
      </SnyRow>
      <SnyRow>
        <SnyCol className="border mb-4" xs="3">
          .Snycol-3
        </SnyCol>
        <SnyCol className="border mb-4" xs="auto">
          .Snycol-auto - variable width content
        </SnyCol>
        <SnyCol className="border mb-4" xs="3">
          .Snycol-3
        </SnyCol>
      </SnyRow>
      <SnyRow>
        <SnyCol className="border mb-4" xs="6">
          .Snycol-6
        </SnyCol>
        <SnyCol className="border mb-4" xs="6">
          .Snycol-6
        </SnyCol>
      </SnyRow>
      <SnyRow>
        <SnyCol className="border mb-4" xs="6" sm="4">
          .Snycol-6 .Snycol-sm-4
        </SnyCol>
        <SnyCol className="border mb-4" xs="6" sm="4">
          .Snycol-6 .Snycol-sm-4
        </SnyCol>
        <SnyCol className="border mb-4" sm="4">
          .Snycol-sm-4
        </SnyCol>
      </SnyRow>
      <SnyRow>
        <SnyCol className="border mb-4" sm={{ size: 6, order: 2, offset: 1 }}>
          .Snycol-sm-6 .order-sm-2 .offset-sm-1
        </SnyCol>
      </SnyRow>
      <SnyRow>
        <SnyCol className="border mb-4" sm="12" md={{ size: 6, offset: 3 }}>
          .Snycol-sm-12 .Snycol-md-6 .offset-md-3
        </SnyCol>
      </SnyRow>
      <SnyRow>
        <SnyCol className="border mb-4" sm={{ size: 'auto', offset: 1 }}>
          .Snycol-sm-auto .offset-sm-1
        </SnyCol>
        <SnyCol className="border mb-4" sm={{ size: 'auto', offset: 1 }}>
          .Snycol-sm-auto .offset-sm-1
        </SnyCol>
      </SnyRow>
    </SnyContainer>
  );
}

export default Example;
