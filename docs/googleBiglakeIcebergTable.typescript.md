# `googleBiglakeIcebergTable` Submodule <a name="`googleBiglakeIcebergTable` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergTable <a name="GoogleBiglakeIcebergTable" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table google_biglake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergTable.GoogleBiglakeIcebergTable(scope: Construct, id: string, config: GoogleBiglakeIcebergTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig">GoogleBiglakeIcebergTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig">GoogleBiglakeIcebergTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec"></a>

```typescript
public putPartitionSpec(value: GoogleBiglakeIcebergTablePartitionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema"></a>

```typescript
public putSchema(value: GoogleBiglakeIcebergTableSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBiglakeIcebergTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetPartitionSpec"></a>

```typescript
public resetPartitionSpec(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBiglakeIcebergTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBiglakeIcebergTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBiglakeIcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference">GoogleBiglakeIcebergTablePartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference">GoogleBiglakeIcebergTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference">GoogleBiglakeIcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpecInput">partitionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: GoogleBiglakeIcebergTablePartitionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference">GoogleBiglakeIcebergTablePartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schema"></a>

```typescript
public readonly schema: GoogleBiglakeIcebergTableSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference">GoogleBiglakeIcebergTableSchemaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBiglakeIcebergTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference">GoogleBiglakeIcebergTableTimeoutsOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpecInput"></a>

```typescript
public readonly partitionSpecInput: GoogleBiglakeIcebergTablePartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: GoogleBiglakeIcebergTableSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBiglakeIcebergTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergTableConfig <a name="GoogleBiglakeIcebergTableConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

const googleBiglakeIcebergTableConfig: googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.catalog">catalog</a></code> | <code>string</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.name">name</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.namespace">namespace</a></code> | <code>string</code> | The parent namespace of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.location">location</a></code> | <code>string</code> | The location of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | User-defined properties for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The name of the IcebergCatalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#catalog GoogleBiglakeIcebergTable#catalog}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The parent namespace of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#namespace GoogleBiglakeIcebergTable#namespace}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.schema"></a>

```typescript
public readonly schema: GoogleBiglakeIcebergTableSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#schema GoogleBiglakeIcebergTable#schema}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#deletion_policy GoogleBiglakeIcebergTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#location GoogleBiglakeIcebergTable#location}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: GoogleBiglakeIcebergTablePartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#partition_spec GoogleBiglakeIcebergTable#partition_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined properties for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#properties GoogleBiglakeIcebergTable#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBiglakeIcebergTableTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#timeouts GoogleBiglakeIcebergTable#timeouts}

---

### GoogleBiglakeIcebergTablePartitionSpec <a name="GoogleBiglakeIcebergTablePartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

const googleBiglakeIcebergTablePartitionSpec: googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]</code> | fields block. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.property.fields"></a>

```typescript
public readonly fields: IResolvable | GoogleBiglakeIcebergTablePartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#fields GoogleBiglakeIcebergTable#fields}

---

### GoogleBiglakeIcebergTablePartitionSpecFields <a name="GoogleBiglakeIcebergTablePartitionSpecFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

const googleBiglakeIcebergTablePartitionSpecFields: googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.name">name</a></code> | <code>string</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.sourceId">sourceId</a></code> | <code>number</code> | The source field ID for the partition field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.transform">transform</a></code> | <code>string</code> | The transform to apply to the source field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

The source field ID for the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#source_id GoogleBiglakeIcebergTable#source_id}

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

The transform to apply to the source field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#transform GoogleBiglakeIcebergTable#transform}

---

### GoogleBiglakeIcebergTableSchema <a name="GoogleBiglakeIcebergTableSchema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

const googleBiglakeIcebergTableSchema: googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]</code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | The field IDs that make up the identifier for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.type">type</a></code> | <code>string</code> | The type of the schema. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.fields"></a>

```typescript
public readonly fields: IResolvable | GoogleBiglakeIcebergTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#fields GoogleBiglakeIcebergTable#fields}

---

##### `identifierFieldIds`<sup>Optional</sup> <a name="identifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

The field IDs that make up the identifier for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#identifier_field_ids GoogleBiglakeIcebergTable#identifier_field_ids}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#type GoogleBiglakeIcebergTable#type}

---

### GoogleBiglakeIcebergTableSchemaFields <a name="GoogleBiglakeIcebergTableSchemaFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

const googleBiglakeIcebergTableSchemaFields: googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.id">id</a></code> | <code>number</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.name">name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the field is required. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.type">type</a></code> | <code>string</code> | The type of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.doc">doc</a></code> | <code>string</code> | A description of the field. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

The unique identifier of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#required GoogleBiglakeIcebergTable#required}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#type GoogleBiglakeIcebergTable#type}

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

A description of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#doc GoogleBiglakeIcebergTable#doc}

---

### GoogleBiglakeIcebergTableTimeouts <a name="GoogleBiglakeIcebergTableTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

const googleBiglakeIcebergTableTimeouts: googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#create GoogleBiglakeIcebergTable#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#delete GoogleBiglakeIcebergTable#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#update GoogleBiglakeIcebergTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#create GoogleBiglakeIcebergTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#delete GoogleBiglakeIcebergTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#update GoogleBiglakeIcebergTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergTablePartitionSpecFieldsList <a name="GoogleBiglakeIcebergTablePartitionSpecFieldsList" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get"></a>

```typescript
public get(index: number): GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBiglakeIcebergTablePartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]

---


### GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference <a name="GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: number;
```

- *Type:* number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput"></a>

```typescript
public readonly transformInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBiglakeIcebergTablePartitionSpecFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>

---


### GoogleBiglakeIcebergTablePartitionSpecOutputReference <a name="GoogleBiglakeIcebergTablePartitionSpecOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields">putFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | GoogleBiglakeIcebergTablePartitionSpecFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList">GoogleBiglakeIcebergTablePartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.specId">specId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fields"></a>

```typescript
public readonly fields: GoogleBiglakeIcebergTablePartitionSpecFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList">GoogleBiglakeIcebergTablePartitionSpecFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | GoogleBiglakeIcebergTablePartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBiglakeIcebergTablePartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---


### GoogleBiglakeIcebergTableSchemaFieldsList <a name="GoogleBiglakeIcebergTableSchemaFieldsList" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get"></a>

```typescript
public get(index: number): GoogleBiglakeIcebergTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBiglakeIcebergTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]

---


### GoogleBiglakeIcebergTableSchemaFieldsOutputReference <a name="GoogleBiglakeIcebergTableSchemaFieldsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resetDoc">resetDoc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoc` <a name="resetDoc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resetDoc"></a>

```typescript
public resetDoc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.docInput">docInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.doc">doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docInput`<sup>Optional</sup> <a name="docInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.docInput"></a>

```typescript
public readonly docInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBiglakeIcebergTableSchemaFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>

---


### GoogleBiglakeIcebergTableSchemaOutputReference <a name="GoogleBiglakeIcebergTableSchemaOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds">resetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | GoogleBiglakeIcebergTableSchemaFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]

---

##### `resetIdentifierFieldIds` <a name="resetIdentifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds"></a>

```typescript
public resetIdentifierFieldIds(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList">GoogleBiglakeIcebergTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.schemaId">schemaId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput">identifierFieldIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fields"></a>

```typescript
public readonly fields: GoogleBiglakeIcebergTableSchemaFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList">GoogleBiglakeIcebergTableSchemaFieldsList</a>

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: number;
```

- *Type:* number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | GoogleBiglakeIcebergTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]

---

##### `identifierFieldIdsInput`<sup>Optional</sup> <a name="identifierFieldIdsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput"></a>

```typescript
public readonly identifierFieldIdsInput: number[];
```

- *Type:* number[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifierFieldIds`<sup>Required</sup> <a name="identifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBiglakeIcebergTableSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---


### GoogleBiglakeIcebergTableTimeoutsOutputReference <a name="GoogleBiglakeIcebergTableTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBiglakeIcebergTable } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBiglakeIcebergTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---



