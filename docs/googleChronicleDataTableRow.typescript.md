# `googleChronicleDataTableRow` Submodule <a name="`googleChronicleDataTableRow` Submodule" id="@cdktn/provider-google-beta.googleChronicleDataTableRow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataTableRow <a name="GoogleChronicleDataTableRow" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row google_chronicle_data_table_row}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer"></a>

```typescript
import { googleChronicleDataTableRow } from '@cdktn/provider-google-beta'

new googleChronicleDataTableRow.GoogleChronicleDataTableRow(scope: Construct, id: string, config: GoogleChronicleDataTableRowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig">GoogleChronicleDataTableRowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig">GoogleChronicleDataTableRowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetRowTimeToLive">resetRowTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleDataTableRowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRowTimeToLive` <a name="resetRowTimeToLive" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetRowTimeToLive"></a>

```typescript
public resetRowTimeToLive(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleDataTableRow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isConstruct"></a>

```typescript
import { googleChronicleDataTableRow } from '@cdktn/provider-google-beta'

googleChronicleDataTableRow.GoogleChronicleDataTableRow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformElement"></a>

```typescript
import { googleChronicleDataTableRow } from '@cdktn/provider-google-beta'

googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformResource"></a>

```typescript
import { googleChronicleDataTableRow } from '@cdktn/provider-google-beta'

googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport"></a>

```typescript
import { googleChronicleDataTableRow } from '@cdktn/provider-google-beta'

googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleChronicleDataTableRow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleDataTableRow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleDataTableRow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataTableRow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableRow">dataTableRow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference">GoogleChronicleDataTableRowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableIdInput">dataTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.rowTimeToLiveInput">rowTimeToLiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableId">dataTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.rowTimeToLive">rowTimeToLive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataTableRow`<sup>Required</sup> <a name="dataTableRow" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableRow"></a>

```typescript
public readonly dataTableRow: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleDataTableRowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference">GoogleChronicleDataTableRowTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataTableIdInput`<sup>Optional</sup> <a name="dataTableIdInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableIdInput"></a>

```typescript
public readonly dataTableIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rowTimeToLiveInput`<sup>Optional</sup> <a name="rowTimeToLiveInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.rowTimeToLiveInput"></a>

```typescript
public readonly rowTimeToLiveInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleDataTableRowTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableId"></a>

```typescript
public readonly dataTableId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rowTimeToLive`<sup>Required</sup> <a name="rowTimeToLive" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.rowTimeToLive"></a>

```typescript
public readonly rowTimeToLive: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataTableRowConfig <a name="GoogleChronicleDataTableRowConfig" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.Initializer"></a>

```typescript
import { googleChronicleDataTableRow } from '@cdktn/provider-google-beta'

const googleChronicleDataTableRowConfig: googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.dataTableId">dataTableId</a></code> | <code>string</code> | The ID of the parent DataTable. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.instance">instance</a></code> | <code>string</code> | The Chronicle instance ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.location">location</a></code> | <code>string</code> | The GCP location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.values">values</a></code> | <code>string[]</code> | All column values for a single row. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#id GoogleChronicleDataTableRow#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#project GoogleChronicleDataTableRow#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.rowTimeToLive">rowTimeToLive</a></code> | <code>string</code> | User-provided TTL of the data table row. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.dataTableId"></a>

```typescript
public readonly dataTableId: string;
```

- *Type:* string

The ID of the parent DataTable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#data_table_id GoogleChronicleDataTableRow#data_table_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The Chronicle instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#instance GoogleChronicleDataTableRow#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The GCP location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#location GoogleChronicleDataTableRow#location}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

All column values for a single row.

The values should be in the same order
as the columns of the data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#values GoogleChronicleDataTableRow#values}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#deletion_policy GoogleChronicleDataTableRow#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#id GoogleChronicleDataTableRow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#project GoogleChronicleDataTableRow#project}.

---

##### `rowTimeToLive`<sup>Optional</sup> <a name="rowTimeToLive" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.rowTimeToLive"></a>

```typescript
public readonly rowTimeToLive: string;
```

- *Type:* string

User-provided TTL of the data table row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#row_time_to_live GoogleChronicleDataTableRow#row_time_to_live}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleDataTableRowTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#timeouts GoogleChronicleDataTableRow#timeouts}

---

### GoogleChronicleDataTableRowTimeouts <a name="GoogleChronicleDataTableRowTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.Initializer"></a>

```typescript
import { googleChronicleDataTableRow } from '@cdktn/provider-google-beta'

const googleChronicleDataTableRowTimeouts: googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#create GoogleChronicleDataTableRow#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#delete GoogleChronicleDataTableRow#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#update GoogleChronicleDataTableRow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#create GoogleChronicleDataTableRow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#delete GoogleChronicleDataTableRow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_data_table_row#update GoogleChronicleDataTableRow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataTableRowTimeoutsOutputReference <a name="GoogleChronicleDataTableRowTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataTableRow } from '@cdktn/provider-google-beta'

new googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataTableRowTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a>

---



