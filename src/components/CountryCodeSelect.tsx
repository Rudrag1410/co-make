import React from "react";
import Select, { StylesConfig, components, MenuListProps } from "react-select";
import { countryCodes } from "@/data/countryCodes";

interface CountryCodeSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  name?: string;
  disabled?: boolean;
  onBlur?: () => void;
}

const options = countryCodes.map((c) => ({
  value: c.code,
  label: `${c.code} (${c.country})`,
}));

const CustomMenuList = (props: MenuListProps<any, false>) => {
  return (
    <div data-lenis-prevent="true" onWheel={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()}>
      <components.MenuList {...props} />
    </div>
  );
};

const customStyles: StylesConfig<any, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    minHeight: "unset",
    cursor: "pointer",
    padding: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "inherit",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#020617", // slate-950
    border: "1px solid rgba(255, 255, 255, 0.1)",
    zIndex: 99999,
    width: "max-content",
    minWidth: "100%",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 99999 }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "rgba(255,255,255,0.1)" : "transparent",
    color: state.isFocused ? "#D4AF37" : "white", // gold
    cursor: "pointer",
    whiteSpace: "nowrap",
    padding: "8px 16px",
    ":active": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "inherit",
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "inherit",
    opacity: 0.7,
    padding: "0",
    "&:hover": {
      opacity: 1,
      color: "inherit",
    },
  }),
};

export const CountryCodeSelect = React.forwardRef<any, CountryCodeSelectProps>(
  ({ value, onChange, className = "", disabled, name, onBlur }, ref) => {
    const id = React.useId();
    const selectedOption = options.find((o) => o.value === value) || options.find((o) => o.value === "+971") || options[0];

    const formatOptionLabel = (data: any, { context }: any) => {
      if (context === "value") {
        return data.value;
      }
      return data.label;
    };

    const isBrowser = typeof window !== "undefined";

    return (
      <div className={`w-full ${className} [&>div]:h-full [&>div>div]:h-full`}>
        <Select
          ref={ref}
          instanceId={id}
          options={options}
          value={selectedOption}
          onChange={(val: any) => onChange && onChange(val.value)}
          onBlur={onBlur}
          isDisabled={disabled}
          name={name}
          styles={customStyles}
          formatOptionLabel={formatOptionLabel}
          isSearchable={true}
          maxMenuHeight={180}
          menuPortalTarget={isBrowser ? document.body : null}
          components={{ MenuList: CustomMenuList }}
        />
      </div>
    );
  }
);
CountryCodeSelect.displayName = "CountryCodeSelect";
