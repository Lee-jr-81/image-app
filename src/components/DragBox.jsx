import React from "react";

export default function DragBox() {
  return (
    <section class="container">
      <div className="dragbox-container">
        <div className="Dashed-container">
          <div class="card bg-dark text-white">
            {/* <img
              class="card-img"
              src="https://testersdock.com/wp-content/uploads/2017/09/file-upload-1280x640.png"
              alt="Card image"
            /> */}
            <div class="card-img-overlay"></div>
            <h1 className="title">Drag Your Images Or Click To Browse</h1>
          </div>
          <input
            type="file"
            accept="image/*"
            className="mt-2 btn btn-outline-warning w-75"
            onChange={(e) => this.handle(e)}
          />
        </div>
      </div>
    </section>
  );
}
