import React from 'react';

import styles from './Admin.css';

export interface AdminProps {
  prop?: string;
}

export function Admin({prop = 'default value'}: AdminProps) {
  return <div className={styles.Admin}>Admin {prop}</div>;
}
