# `googleChronicleDataExport` Submodule <a name="`googleChronicleDataExport` Submodule" id="@cdktn/provider-google-beta.googleChronicleDataExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataExport <a name="GoogleChronicleDataExport" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export google_chronicle_data_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

new googleChronicleDataExport.GoogleChronicleDataExport(scope: Construct, id: string, config: GoogleChronicleDataExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig">GoogleChronicleDataExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig">GoogleChronicleDataExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels">putIngestionLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIncludeLogTypes">resetIncludeLogTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIngestionLabels">resetIngestionLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetNamespaces">resetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngestionLabels` <a name="putIngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels"></a>

```typescript
public putIngestionLabels(value: IResolvable | GoogleChronicleDataExportIngestionLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleDataExportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeLogTypes` <a name="resetIncludeLogTypes" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIncludeLogTypes"></a>

```typescript
public resetIncludeLogTypes(): void
```

##### `resetIngestionLabels` <a name="resetIngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIngestionLabels"></a>

```typescript
public resetIngestionLabels(): void
```

##### `resetNamespaces` <a name="resetNamespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetNamespaces"></a>

```typescript
public resetNamespaces(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleDataExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

googleChronicleDataExport.GoogleChronicleDataExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleChronicleDataExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleDataExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleDataExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportId">dataExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportStatus">dataExportStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList">GoogleChronicleDataExportDataExportStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.estimatedVolume">estimatedVolume</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.exportedVolume">exportedVolume</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabels">ingestionLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList">GoogleChronicleDataExportIngestionLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference">GoogleChronicleDataExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucketInput">gcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypesInput">includeLogTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabelsInput">ingestionLabelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespacesInput">namespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypes">includeLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataExportId`<sup>Required</sup> <a name="dataExportId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportId"></a>

```typescript
public readonly dataExportId: string;
```

- *Type:* string

---

##### `dataExportStatus`<sup>Required</sup> <a name="dataExportStatus" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportStatus"></a>

```typescript
public readonly dataExportStatus: GoogleChronicleDataExportDataExportStatusList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList">GoogleChronicleDataExportDataExportStatusList</a>

---

##### `estimatedVolume`<sup>Required</sup> <a name="estimatedVolume" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.estimatedVolume"></a>

```typescript
public readonly estimatedVolume: number;
```

- *Type:* number

---

##### `exportedVolume`<sup>Required</sup> <a name="exportedVolume" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.exportedVolume"></a>

```typescript
public readonly exportedVolume: number;
```

- *Type:* number

---

##### `ingestionLabels`<sup>Required</sup> <a name="ingestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabels"></a>

```typescript
public readonly ingestionLabels: GoogleChronicleDataExportIngestionLabelsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList">GoogleChronicleDataExportIngestionLabelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleDataExportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference">GoogleChronicleDataExportTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucketInput"></a>

```typescript
public readonly gcsBucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeLogTypesInput`<sup>Optional</sup> <a name="includeLogTypesInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypesInput"></a>

```typescript
public readonly includeLogTypesInput: string[];
```

- *Type:* string[]

---

##### `ingestionLabelsInput`<sup>Optional</sup> <a name="ingestionLabelsInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabelsInput"></a>

```typescript
public readonly ingestionLabelsInput: IResolvable | GoogleChronicleDataExportIngestionLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>[]

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleDataExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeLogTypes`<sup>Required</sup> <a name="includeLogTypes" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypes"></a>

```typescript
public readonly includeLogTypes: string[];
```

- *Type:* string[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataExportConfig <a name="GoogleChronicleDataExportConfig" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

const googleChronicleDataExportConfig: googleChronicleDataExport.GoogleChronicleDataExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.endTime">endTime</a></code> | <code>string</code> | Last, exclusive time from the range. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | Link to the destination Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.instance">instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.startTime">startTime</a></code> | <code>string</code> | Start, inclusive time from the range. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#id GoogleChronicleDataExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.includeLogTypes">includeLogTypes</a></code> | <code>string[]</code> | The specific log types to include in the Data Export request. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.ingestionLabels">ingestionLabels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>[]</code> | ingestion_labels block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.namespaces">namespaces</a></code> | <code>string[]</code> | The namespaces used to filter the export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#project GoogleChronicleDataExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Last, exclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#end_time GoogleChronicleDataExport#end_time}

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

Link to the destination Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#gcs_bucket GoogleChronicleDataExport#gcs_bucket}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The unique identifier for the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#instance GoogleChronicleDataExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#location GoogleChronicleDataExport#location}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Start, inclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#start_time GoogleChronicleDataExport#start_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#id GoogleChronicleDataExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeLogTypes`<sup>Optional</sup> <a name="includeLogTypes" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.includeLogTypes"></a>

```typescript
public readonly includeLogTypes: string[];
```

- *Type:* string[]

The specific log types to include in the Data Export request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#include_log_types GoogleChronicleDataExport#include_log_types}

---

##### `ingestionLabels`<sup>Optional</sup> <a name="ingestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.ingestionLabels"></a>

```typescript
public readonly ingestionLabels: IResolvable | GoogleChronicleDataExportIngestionLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>[]

ingestion_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#ingestion_labels GoogleChronicleDataExport#ingestion_labels}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

The namespaces used to filter the export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#namespaces GoogleChronicleDataExport#namespaces}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#project GoogleChronicleDataExport#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleDataExportTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#timeouts GoogleChronicleDataExport#timeouts}

---

### GoogleChronicleDataExportDataExportStatus <a name="GoogleChronicleDataExportDataExportStatus" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

const googleChronicleDataExportDataExportStatus: googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus = { ... }
```


### GoogleChronicleDataExportIngestionLabels <a name="GoogleChronicleDataExportIngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

const googleChronicleDataExportIngestionLabels: googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.key">key</a></code> | <code>string</code> | The key. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.value">value</a></code> | <code>string</code> | The value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#key GoogleChronicleDataExport#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#value GoogleChronicleDataExport#value}

---

### GoogleChronicleDataExportTimeouts <a name="GoogleChronicleDataExportTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

const googleChronicleDataExportTimeouts: googleChronicleDataExport.GoogleChronicleDataExportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#create GoogleChronicleDataExport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#delete GoogleChronicleDataExport#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#create GoogleChronicleDataExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_data_export#delete GoogleChronicleDataExport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataExportDataExportStatusList <a name="GoogleChronicleDataExportDataExportStatusList" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

new googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get"></a>

```typescript
public get(index: number): GoogleChronicleDataExportDataExportStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleChronicleDataExportDataExportStatusOutputReference <a name="GoogleChronicleDataExportDataExportStatusOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

new googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.dataRbacFiltered">dataRbacFiltered</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.error">error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.exportedGlobPatterns">exportedGlobPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus">GoogleChronicleDataExportDataExportStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataRbacFiltered`<sup>Required</sup> <a name="dataRbacFiltered" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.dataRbacFiltered"></a>

```typescript
public readonly dataRbacFiltered: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.error"></a>

```typescript
public readonly error: string;
```

- *Type:* string

---

##### `exportedGlobPatterns`<sup>Required</sup> <a name="exportedGlobPatterns" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.exportedGlobPatterns"></a>

```typescript
public readonly exportedGlobPatterns: string[];
```

- *Type:* string[]

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleDataExportDataExportStatus;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus">GoogleChronicleDataExportDataExportStatus</a>

---


### GoogleChronicleDataExportIngestionLabelsList <a name="GoogleChronicleDataExportIngestionLabelsList" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

new googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get"></a>

```typescript
public get(index: number): GoogleChronicleDataExportIngestionLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataExportIngestionLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>[]

---


### GoogleChronicleDataExportIngestionLabelsOutputReference <a name="GoogleChronicleDataExportIngestionLabelsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

new googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataExportIngestionLabels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>

---


### GoogleChronicleDataExportTimeoutsOutputReference <a name="GoogleChronicleDataExportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataExport } from '@cdktn/provider-google-beta'

new googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

---



