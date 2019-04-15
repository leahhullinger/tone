import React, { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      userText: ""
    };
  }
}
