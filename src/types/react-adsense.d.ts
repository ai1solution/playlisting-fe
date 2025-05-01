declare module 'react-adsense' {
    import { Component } from 'react';
    
    interface AdSenseProps {
      client?: string;
      slot?: string;
      className?: string;
      style?: React.CSSProperties;
      format?: string;
      responsive?: string;
      layoutKey?: string;
      adTest?: string;
      [key: string]: any;  // For any other props
    }
    
    class AdSenseComponent extends Component<AdSenseProps> {}
    
    // Adding the Google static property
    const AdSense: {
      default: typeof AdSenseComponent;
      Google: typeof AdSenseComponent;
    };
    
    export default AdSense;
  }