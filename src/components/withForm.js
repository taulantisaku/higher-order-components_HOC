import React from "react";

export default function withForm(Component) {
  class WithFormComponent extends React.Component {
    state = {
      formData: {
        ...this.props.initialState,
      },
    };

    handleOnChange = (event) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [event.target.name]: event.target.value,
        },
      });
    };

    render() {
      const { initialState, ...rest } = this.props;
      return (
        <Component
          formData={this.state.formData}
          handleOnChange={this.handleOnChange}
          {...rest}
        />
      );
    }
  }

  return WithFormComponent;
}
