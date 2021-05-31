import { app } from "./app";
import debug from 'debug';

const log = debug('app:main');
const PORT = process.env.PORT || 3333

app.listen(PORT, () => log(`Server running on ${PORT}`));
