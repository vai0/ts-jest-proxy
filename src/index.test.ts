import { sum, DEFAULT_CONFIG, getDefaultConfig } from "./index";

test("sanity", () => {
    expect(sum(1, 2)).toEqual(3);
});

test("config", () => {
    expect(DEFAULT_CONFIG).toEqual(DEFAULT_CONFIG);
});

test("config wrapped in function", () => {
    expect(getDefaultConfig(true)).toEqual(getDefaultConfig(true));
});
