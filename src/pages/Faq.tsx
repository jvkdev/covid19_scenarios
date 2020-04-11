import React from 'react'

import { Col, Container, Row } from 'reactstrap'

import { InlineMath, BlockMath } from 'react-katex'

import FaqTableOfContents from '../components/Faq/FaqTableOfContents'

import FaqContent from '../assets/text/faq.mdx'

export default function Faq() {
  return (
    <Container>
      <InlineMath math={`M_{0}^{a}`} />
      <BlockMath math={`M_{0}^{a}`} />
      <Row>
        <Col>
          <h1 className="h1-default">Frequently asked questions</h1>
          <FaqTableOfContents />
          <hr />
          <FaqContent />
        </Col>
      </Row>
    </Container>
  )
}
