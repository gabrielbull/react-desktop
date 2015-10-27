# Split View

Documentation is coming soon.

<a id="demo-splitview"/>

## Properties

| Property            | Type          | Description                                                            |
| ------------------- | ------------- | ---------------------------------------------------------------------- |
| id                  | string        | Unique ID used for persisting state.                                   |
| compactLength       | number        | Width of the Split View Pane when in compact view.                     |
| openLength          | number        | Width of the Split View Pane when in open view.                        |
| placement           | string        | (Not yet implemented.)                                                 |
| isOpen              | bool          | Is the Split View Pane open.                                           |
| persistIsOpen       | bool          | Save the state of the Split View Pane.                                 |
| persistSelectedItem | bool          | Save the state of the selected item.                                   |
| push                | bool          | Display push animation when selecting an item.                         |
| onPaneToggle        | func          | Callback function for Split View Pane toggle between open and compact. |

## Examples

```jsx
<SplitView isOpen openLength={200} push persistIsOpen persistSelectedItem>
  <SplitView.Item
    title="Item 1"
    requestedTheme="light"
    background="#ffffff"
  >
    <Grid>
      Welcome to React Desktop
    </Grid>
  </SplitView.Item>
  <SplitView.Item
    title="Forms"
    icon={Icons.formIcon}
    padding="40px 30px"
    requestedTheme="light"
    background="#ffffff"
  >
    <Form>
      <TextBlock color="red">
        There was an error submitting this form.
      </TextBlock>

      <Form.Row>
        <TextBox header="Label" defaultValue="" placeholder="TextField" style={{width: '400px'}}/>
      </Form.Row>

      <Form.Row>
        <TextBox header="Longer Label" defaultValue="" placeholder="TextField" style={{width: '400px'}}/>
      </Form.Row>

      <Form.Row>
        <Checkbox label="Default checked" defaultChecked/>
      </Form.Row>

      <Form.Row>
        <Button onPress="submit" color push>Button With Color</Button>
        <Button push>Button</Button>

        <ProgressRing size={32} color absolute/>
      </Form.Row>
    </Form>
  </SplitView.Item>
</SplitView>
```

