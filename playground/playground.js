import React from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  PushButton,
  TextField,
  Toolbar,
  Box,
  SegmentedControl,
  IndeterminateCircularProgressIndicator,
  Form,
  Label,
  Window
} from '../src/Main';

document.title = 'React Desktop Playground';
document.body.style.padding = '30px 40px';
document.body.style.background = 'white';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

document.body.innerHTML = `
  <div id="window1" style="width: 600px;"></div>
  <div id="window2" style="width: 600px;"></div>
  <script src="/.js"></script>
`;

ReactDOM.render(
  (
    <Window chrome={true} style={{marginBottom: '40px'}}>
      <TitleBar
        title="TitleBar"
        controls={true}
        onClosePress={() => { alert('close'); }}
        onMinimizePress={() => { alert('minimize'); }}
        onResizePress={() => { alert('resize'); }}
      />
    </Window>
  ),
  document.getElementById('window1')
);

ReactDOM.render(
  (
    <Window chrome={true}>
      <TitleBar title="TitleBar with Toolbar" controls={true}>
        <Toolbar/>
      </TitleBar>

      <Box className="box">
        <SegmentedControl>
          <SegmentedControl.Item
            title="Selected"
            selected={true}
            onPress={() => { console.log('select login'); } }
            className="form"
          >
            <Form onSubmit={() => { alert('form submitted'); } }>
              <Label color="red">
                There was an error submitting this form.
              </Label>

              <Form.Row>
                <Label>Label:</Label>
                <TextField defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
              </Form.Row>

              <Form.Row>
                <Label>Longer label:</Label>
                <TextField defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
              </Form.Row>

              <Form.Row>
                <PushButton>PushButton</PushButton>
                <PushButton onPress="submit" color="blue">PushButton Blue</PushButton>

                <IndeterminateCircularProgressIndicator absolute={true}/>
              </Form.Row>
            </Form>
          </SegmentedControl.Item>

          <SegmentedControl.Item
            title="Segmented"
            selected={false}
            onPress={() => { console.log('select tab 1'); } }
          >
          </SegmentedControl.Item>

          <SegmentedControl.Item
            title="Control"
            selected={false}
            onPress={() => { console.log('select settings'); } }
          >
          </SegmentedControl.Item>
        </SegmentedControl>
      </Box>
    </Window>
  ),
  document.getElementById('window2')
);
