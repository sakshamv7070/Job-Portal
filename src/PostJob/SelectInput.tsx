import { useEffect, useState } from "react";
import {
  Combobox,
  InputBase,
  ScrollArea,
  useCombobox,
} from "@mantine/core";


const SelectInput = (props: any) => {

  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");


  const combobox = useCombobox({

    onDropdownClose: () => {
      combobox.resetSelectedOption();
    },

  });


  useEffect(() => {

    setData(props.options || []);

  }, [props.options]);



  const exactOptionMatch = data.some(
    (item) =>
      item.toLowerCase() === search.toLowerCase()
  );



  const filteredOptions = data
    .filter((item) =>
      item
        .toLowerCase()
        .includes(search.toLowerCase().trim())
    )
    .map((item) => (

      <Combobox.Option
        value={item}
        key={item}
      >
        {item}
      </Combobox.Option>

    ));



  return (

    <Combobox

      store={combobox}

      withinPortal={false}

      onOptionSubmit={(val) => {


        if (val === "$create") {

          setData((current) => [
            ...current,
            search
          ]);

          setValue(search);


        } else {

          setValue(val);

        }


        setSearch("");

        combobox.closeDropdown();

      }}

    >



      <Combobox.Target>

        <InputBase

          className="[&_input]:font-medium"

          withAsterisk={props.withAsterisk}

          label={props.label}

          placeholder={props.placeholder}

          value={search || value}


          onChange={(event) => {

            setSearch(event.currentTarget.value);

            combobox.openDropdown();

          }}


          onClick={() => {

            combobox.openDropdown();

          }}


          onFocus={() => {

            combobox.openDropdown();

          }}

        />

      </Combobox.Target>




      <Combobox.Dropdown>


        <ScrollArea.Autosize
          mah={200}
          type="auto"
        >


          <Combobox.Options>


            {filteredOptions}



            {
              search.trim().length > 0 &&
              !exactOptionMatch && (

                <Combobox.Option
                  value="$create"
                >

                  + Create "{search}"

                </Combobox.Option>

              )
            }


          </Combobox.Options>


        </ScrollArea.Autosize>


      </Combobox.Dropdown>


    </Combobox>

  );

};


export default SelectInput;