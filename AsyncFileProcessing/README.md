Objective
Create a service that processes multiple files asynchronously.
Requirements
Implement a class `FileService` with method:

```typescript
readFiles(paths: string[]): Promise<FileResult[]>
```

For each file:
1. Read file content.
2. Validate if it contains valid JSON.
3. Add a `processedAt` timestamp field.
4. Simulate 200–500 ms processing delay.
5. On invalid JSON, return an error.

- Interface:
```typescript
interface FileResult {
path: string;
success: boolean;
data?: any;
error?: string;
}