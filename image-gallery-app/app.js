const images = [{
    title: "Mountain Landscape",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Ocean View",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "City Skyline",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156"
  },
  {
    title: "Forest Trail",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
  },
  {
    title: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Snow Mountains",
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"
  },
  {
    title: "Sunset Beach",
    url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98"
  },
  {
    title: "Waterfall",
    url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9"
  },
  {
    title: "Green Hills",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Lake Reflection",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    title: "Autumn Forest",
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
  },
  {
    title: "Night City Lights",
    url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63"
  },
  {
    title: "Road Trip",
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
  },
  {
    title: "Cloudy Mountains",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "River Valley",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
  },
  {
    title: "Island View",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Golden Desert",
    url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae"
  },
  {
    title: "Winter Forest",
    url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5"
  },
  {
    title: "Mountain Lake",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    title: "Peaceful Nature",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  }
];
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

const imgTitle = document.getElementById("imgTitle");
const imgUrl = document.getElementById("imgUrl");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");

/* RENDER GALLERY */
function renderGallery() {
  gallery.innerHTML = "";

  images.forEach((item, index) => {
    const wrapper = document.createElement("div");

    const img = document.createElement("img");
    img.src = item.url + "?w=600&q=80";
    img.alt = item.title || "gallery image";

    img.onclick = () => {
      modal.style.display = "flex";
      modalImg.src = item.url + "?w=1200&q=90";
    };

    wrapper.appendChild(img);

    /* OPTIONAL TITLE */
    if (item.title) {
      const title = document.createElement("div");
      title.className = "label";
      title.innerText = item.title;
      wrapper.appendChild(title);
    }

    /* INDEX LABEL */
    const indexLabel = document.createElement("div");
    indexLabel.className = "label index";
    indexLabel.innerText = `Index: ${index}`;
    wrapper.appendChild(indexLabel);

    gallery.appendChild(wrapper);
  });
}

/* INITIAL LOAD */
renderGallery();

/* ADD IMAGE (URL REQUIRED, TITLE OPTIONAL) */
addBtn.onclick = () => {
  if (imgUrl.value.trim() === "") {
    alert("Image URL is required");
    return;
  }

  images.push({
    title: imgTitle.value.trim(),
    url: imgUrl.value.trim()
  });

  imgTitle.value = "";
  imgUrl.value = "";

  renderGallery();
};

/* DELETE IMAGE BY INDEX */
deleteBtn.onclick = () => {
  if (images.length === 0) {
    alert("No images to delete");
    return;
  }

  const index = prompt(
    `Enter image index to delete (0 to ${images.length - 1})`
  );

  if (index === null) return;

  const idx = Number(index);

  if (isNaN(idx) || idx < 0 || idx >= images.length) {
    alert("Invalid index");
    return;
  }

  images.splice(idx, 1);
  renderGallery();
};

/* CLOSE MODAL */
closeBtn.onclick = () => {
  modal.style.display = "none";
};
