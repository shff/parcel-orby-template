import "./main.css";
import { h, render, useEffect, useRef } from "@orby/core";

const Table = () => {
  const columns = [ "restaurant name", "phone", "email" ];
  const rows = [
    [ "Restaurant, Brownber", "+19381949518", "restaurant,_brownber@gmail.com" ],
    [ "Jerry Wings", "+16039551180", "jerry_wings@gmail.com" ],
    [ "Wabi Sabi", "+17303647667", "wabi_sabi@gmail.com" ],
    [ "Pete Brad", "+15534334028", "pete_brad@gmail.com" ],
    [ "Fahrenheit", "+13209860738", "fahrenheit@gmail.com" ],
    [ "Burger King", "+17733115345", "burger_king@gmail.com" ],
    [ "Chinese news", "+11426244351", "chinese_news@gmail.com" ],
    [ "Tavern \"Old Tbilisi\"", "+11943572406", "tavern_\"old_tbilisi\"@gmail.com" ],
    [ "Tanuki", "+12394463381", "tanuki@gmail.com" ],
    [ "Wabi Sabi", "+14731287542", "wabi_sabi@gmail.com" ],
    [ "Tanuki", "+11738118787", "tanuki@gmail.com" ],
    [ "Wabi Sabi", "+18250763394", "wabi_sabi@gmail.com" ],
    [ "TheMadCook", "+15320370275", "themadcook@gmail.com" ],
    [ "Wabi Sabi", "+16955842034", "wabi_sabi@gmail.com" ],
    [ "Wabi Sabi", "+18816888591", "wabi_sabi@gmail.com" ],
  ];

  return (
    <div class="wrap">
      <table class="table">
        <thead>
          <tr>{ columns.map((col) => <th>{ col }</th>) }</tr>
        </thead>
        <tbody>
          { rows.map(row =>
            <tr>{ row.map(col => <td>{ col }</td>) }</tr>
          ) }
        </tbody>
      </table>
    </div>
  );
};

render(<Table />, document.querySelector("main"));
