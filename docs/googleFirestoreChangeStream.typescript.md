# `googleFirestoreChangeStream` Submodule <a name="`googleFirestoreChangeStream` Submodule" id="@cdktn/provider-google-beta.googleFirestoreChangeStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreChangeStream <a name="GoogleFirestoreChangeStream" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream google_firestore_change_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

new googleFirestoreChangeStream.GoogleFirestoreChangeStream(scope: Construct, id: string, config: GoogleFirestoreChangeStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig">GoogleFirestoreChangeStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig">GoogleFirestoreChangeStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope">putCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope">putDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetCollectionGroupScope">resetCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabaseScope">resetDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCollectionGroupScope` <a name="putCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope"></a>

```typescript
public putCollectionGroupScope(value: GoogleFirestoreChangeStreamCollectionGroupScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---

##### `putDatabaseScope` <a name="putDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope"></a>

```typescript
public putDatabaseScope(value: GoogleFirestoreChangeStreamDatabaseScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirestoreChangeStreamTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---

##### `resetCollectionGroupScope` <a name="resetCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetCollectionGroupScope"></a>

```typescript
public resetCollectionGroupScope(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDatabaseScope` <a name="resetDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabaseScope"></a>

```typescript
public resetDatabaseScope(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirestoreChangeStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleFirestoreChangeStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirestoreChangeStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirestoreChangeStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreChangeStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScope">collectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference">GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScope">databaseScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference">GoogleFirestoreChangeStreamDatabaseScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference">GoogleFirestoreChangeStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScopeInput">collectionGroupScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScopeInput">databaseScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionGroupScope`<sup>Required</sup> <a name="collectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScope"></a>

```typescript
public readonly collectionGroupScope: GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference">GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `databaseScope`<sup>Required</sup> <a name="databaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScope"></a>

```typescript
public readonly databaseScope: GoogleFirestoreChangeStreamDatabaseScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference">GoogleFirestoreChangeStreamDatabaseScopeOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirestoreChangeStreamTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference">GoogleFirestoreChangeStreamTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `collectionGroupScopeInput`<sup>Optional</sup> <a name="collectionGroupScopeInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScopeInput"></a>

```typescript
public readonly collectionGroupScopeInput: GoogleFirestoreChangeStreamCollectionGroupScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `databaseScopeInput`<sup>Optional</sup> <a name="databaseScopeInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScopeInput"></a>

```typescript
public readonly databaseScopeInput: GoogleFirestoreChangeStreamDatabaseScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirestoreChangeStreamTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreChangeStreamCollectionGroupScope <a name="GoogleFirestoreChangeStreamCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.Initializer"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

const googleFirestoreChangeStreamCollectionGroupScope: googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.property.collectionGroupId">collectionGroupId</a></code> | <code>string</code> | The ID of the collection group to track. |

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.property.collectionGroupId"></a>

```typescript
public readonly collectionGroupId: string;
```

- *Type:* string

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#collection_group_id GoogleFirestoreChangeStream#collection_group_id}

---

### GoogleFirestoreChangeStreamConfig <a name="GoogleFirestoreChangeStreamConfig" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.Initializer"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

const googleFirestoreChangeStreamConfig: googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.name">name</a></code> | <code>string</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.collectionGroupScope">collectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.database">database</a></code> | <code>string</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.databaseScope">databaseScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#name GoogleFirestoreChangeStream#name}

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#retention_period GoogleFirestoreChangeStream#retention_period}

---

##### `collectionGroupScope`<sup>Optional</sup> <a name="collectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.collectionGroupScope"></a>

```typescript
public readonly collectionGroupScope: GoogleFirestoreChangeStreamCollectionGroupScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#collection_group_scope GoogleFirestoreChangeStream#collection_group_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#database GoogleFirestoreChangeStream#database}

---

##### `databaseScope`<sup>Optional</sup> <a name="databaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.databaseScope"></a>

```typescript
public readonly databaseScope: GoogleFirestoreChangeStreamDatabaseScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#database_scope GoogleFirestoreChangeStream#database_scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#deletion_policy GoogleFirestoreChangeStream#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirestoreChangeStreamTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#timeouts GoogleFirestoreChangeStream#timeouts}

---

### GoogleFirestoreChangeStreamDatabaseScope <a name="GoogleFirestoreChangeStreamDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope.Initializer"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

const googleFirestoreChangeStreamDatabaseScope: googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope = { ... }
```


### GoogleFirestoreChangeStreamTimeouts <a name="GoogleFirestoreChangeStreamTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.Initializer"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

const googleFirestoreChangeStreamTimeouts: googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference <a name="GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

new googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput">collectionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId">collectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionGroupIdInput`<sup>Optional</sup> <a name="collectionGroupIdInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput"></a>

```typescript
public readonly collectionGroupIdInput: string;
```

- *Type:* string

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId"></a>

```typescript
public readonly collectionGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirestoreChangeStreamCollectionGroupScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---


### GoogleFirestoreChangeStreamDatabaseScopeOutputReference <a name="GoogleFirestoreChangeStreamDatabaseScopeOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

new googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirestoreChangeStreamDatabaseScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---


### GoogleFirestoreChangeStreamTimeoutsOutputReference <a name="GoogleFirestoreChangeStreamTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirestoreChangeStream } from '@cdktn/provider-google-beta'

new googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirestoreChangeStreamTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---



