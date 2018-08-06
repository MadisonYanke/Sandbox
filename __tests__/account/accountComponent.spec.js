import React from "react";
import { shallow } from "enzyme";

import IAccount from "../../src/dataDefinitions/account";
import Account from "../../src/components/account/Account";

describe("Account", function() {
  var wrapper = shallow(<Account account={new IAccount()} />);
  it("should render a div.", function() {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("should render 2 paragraphs.", function() {
    expect(wrapper.find("p").length).toEqual(2);
  });
  it("should have gray background if unselected", function() {
    expect(
      wrapper
        .find("div")
        .first()
        .props().style
    ).toHaveProperty("backgroundColor", "gray");
  });
  it("should have colored background if selected", function() {
    var account = new IAccount();
    account.selected = true;
    account.color = "#00aaff";
    var wrapperWithColorAndSelected = shallow(<Account account={account} />);
    expect(
      wrapperWithColorAndSelected
        .find("div")
        .first()
        .props().style
    ).toHaveProperty("backgroundColor", "#00aaff");
  });
});
