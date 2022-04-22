const colors = {
  refs: [
    ["bg-th-orange", null],
    ["bg-th-yellow", "text-th-black"],
    ["bg-th-light-yellow", "text-th-black"],
    ["bg-th-green", "text-th-black"],
    ["bg-th-lime", "text-th-black"],
    ["bg-th-aqua", "text-th-black"],
    ["bg-th-light-blue", null],
    ["bg-th-purple", null],
    ["bg-th-light-purple", null],
    ["bg-th-deep-purple", null],
    ["bg-th-light-pink", null],
  ],
  random() {
    const i = Math.floor(Math.random() * this.refs.length);
    const [bg, text] = this.refs[i];

    return [bg!, text || "text-th-white"];
  },
};

export default colors;