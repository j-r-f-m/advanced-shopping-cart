import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      {/* md=2 show two columns when screen is medium sized and so on */}
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
