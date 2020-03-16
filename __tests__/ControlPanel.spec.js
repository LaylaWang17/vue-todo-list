import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import ControlPanel from "../src/components/ControlPanel.vue";
import "../src/element-ui";

describe("ControlPanel", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(ControlPanel);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("should show 0 left todos for default component", () => {
    const wrapper = shallowMount(ControlPanel);
    expect(wrapper.find(".left-item-amount").text()).toBe("0 items left");
  });

  test("should show left todos amount", () => {
    const wrapper = shallowMount(ControlPanel, {
      propsData: {
        leftItemAmount: 1
      }
    });
    expect(wrapper.find(".left-item-amount").text()).toBe("1 items left");
  });

  test("should hide clear button when there are no completed todos", () => {
    const wrapper = shallowMount(ControlPanel);
    expect(wrapper.find(".clear-btn").classes("hide")).toBeTruthy();
  });

  test("should show clear button at 'all' tab and 'completed' tab when there are completed todos", () => {
    const wrapper = shallowMount(ControlPanel, {
      propsData: {
        completedItemAmount: 1
      }
    });

    expect(wrapper.find(".clear-btn").classes("hide")).toBeFalsy();

    wrapper.setData({
      activeTab: "completed"
    });

    Vue.nextTick(() => {
      expect(wrapper.find(".clear-btn").classes("hide")).toBeFalsy();
    });
  });

  test("should hide clear button at 'active' tab", () => {
    const wrapper = shallowMount(ControlPanel, {
      propsData: {
        completedItemAmount: 1
      }
    });

    wrapper.setData({
      activeTab: "active"
    });

    Vue.nextTick(() => {
      expect(wrapper.find(".clear-btn").classes("hide")).toBeTruthy();
    });
  });
});
