import * as React from 'react';
import Header from './Header'
import Head from './Head'
import Row  from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'customer'];

export default function OrderSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 8,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Row>

      <Col sm={12}>
        <Head/>
        </Col>
      </Row>
      <Row>
      <Col sm={2}><Header/></Col>
      <Col sm={10}>
      <div className='oo'>
        <img src='https://www.sigmatest.org/wp-content/uploads/2019/08/organic-food-in-ahmedabad.jpg'></img>
      </div>
      <DataGrid
        sortingOrder={['desc', 'asc']}
        initialState={{
          ...data.initialState,
          sorting: {
            ...data.initialState?.sorting,
            sortModel: [
              {
                field: 'commodity',
                sort: 'asc',
              },
            ],
          },
        }}
        {...data}
      />
      </Col>
      </Row>
    </div>
  );
}
