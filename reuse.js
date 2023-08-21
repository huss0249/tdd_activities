const reuse = {
    selected(e) {
      let trgt = "";
      $fire.classList.remove("fire-up");
      $fire.classList.remove("fire-down");
      e.target.closest("button").dataset.src != null ||
      e.target.closest("button").dataset.src != undefined
        ? (trgt = e.target.closest("button").dataset.src)
        : log("no object");
      trgt === "1" ? $fire.classList.add("fire-fade") : "";
      trgt === "2" ? $fire.classList.add("fire-fade") : "";
      trgt === "3" ? $fire.classList.add("fire-fade") : "";
      trgt === "4" ? $fire.classList.add("fire-fade") : "";
    },
    
    
    fireUp(e) {
      $fire.classList.remove("fire-fade");
      $fire.classList.add("fire-up");
      log(e.target);
    },
    
    
    fireDown(e) {
      $fire.classList.remove("fire-fade");
      $fire.classList.add("fire-down");
      log(e.target);
    }
  };

