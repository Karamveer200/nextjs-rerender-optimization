'use client';

import Select, { Props, StylesConfig } from 'react-select';
import { useEffect, useState } from 'react';

const customSelectStyles = (error?: string | null): StylesConfig => {
  return {
    control: (base, state) => {
      return {
        ...base,
        backgroundColor: '#18181b',
        borderColor: state.isFocused ? '#22c55ec7' : error ? 'red' : '#3f3f46',
        boxShadow: state.isFocused ? '0 0 0 2px rgba(34,197,94,0.2)' : 'none',
        '&:hover': {
          borderColor: '#22c55ec7',
        },
        minHeight: '38px',
      };
    },

    menu: (base) => {
      return {
        ...base,
        backgroundColor: '#18181b',
        border: '1px solid #3f3f46',
        overflow: 'hidden',
      };
    },

    menuList: (base) => {
      return {
        ...base,
        backgroundColor: '#18181b',
      };
    },

    option: (base, state) => {
      return {
        ...base,
        backgroundColor:
          state.isFocused && !state.isSelected
            ? '#27272a'
            : state.isSelected
              ? '#22c55ec7'
              : '#18181b',
        color: state.isSelected ? 'white' : 'white',
        cursor: 'pointer',
        '&:active': {
          backgroundColor: '#22c55ec7',
        },
      };
    },

    singleValue: (base) => ({
      ...base,
      color: 'white',
    }),

    input: (base) => ({
      ...base,
      color: 'white',
    }),

    placeholder: (base) => ({
      ...base,
      color: '#71717a',
    }),

    multiValue: (base) => ({
      ...base,
      backgroundColor: '#27272a',
    }),

    multiValueLabel: (base) => ({
      ...base,
      color: 'white',
    }),

    multiValueRemove: (base) => ({
      ...base,
      color: '#a1a1aa',
      ':hover': {
        backgroundColor: '#3f3f46',
        color: 'white',
      },
    }),

    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? '#22c55ec7' : '#a1a1aa',
      ':hover': {
        color: '#22c55ec7',
      },
    }),

    clearIndicator: (base) => ({
      ...base,
      color: '#a1a1aa',
      ':hover': {
        color: '#ef4444',
      },
    }),

    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: '#3f3f46',
    }),
  };
};

export default function CustomSelect(
  props: Props & { label?: string; error?: string | null }
) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative flex flex-col gap-2">
      {props.label && (
        <label className="text-sm text-white" htmlFor={props.name}>
          {props.label}
        </label>
      )}

      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        styles={customSelectStyles(props.error)}
        {...props}
      />

      {props.error && (
        <span className="text-red-500 text-sm">{props.error}</span>
      )}
    </div>
  );
}
