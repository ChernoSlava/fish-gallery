import React from "react";
import { FishCard } from "..";

export default {
    title: "Example/FishCard",
    component: FishCard
}

const Template = args => <FishCard {...args} />;

export const Playground = Template.bind({})