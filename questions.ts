// 1: Fixed typing warnings

// 2: Find potential performance issue

// 3: On double clicks a grid row, render company details in StockDetails component
//      name, sector, description
//      trend: renders "Up" when close is greater than open otherwise "Down"
//      consider using setTimeout to mock api request with below response
//      renders loading state when response is not ready

const mockDetails = {
  name: "Mock Company",
  sector: "Technology",
  description: `This is a mock company for demo purposes. Selected stock date: ${data.date}.`,
};
