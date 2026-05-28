# `googleOracleDatabaseCloudExadataInfrastructure` Submodule <a name="`googleOracleDatabaseCloudExadataInfrastructure` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructure <a name="GoogleOracleDatabaseCloudExadataInfrastructure" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

new googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure(scope: Construct, id: string, config: GoogleOracleDatabaseCloudExadataInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig">GoogleOracleDatabaseCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig">GoogleOracleDatabaseCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties"></a>

```typescript
public putProperties(value: GoogleOracleDatabaseCloudExadataInfrastructureProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleOracleDatabaseCloudExadataInfrastructureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone"></a>

```typescript
public resetGcpOracleZone(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleOracleDatabaseCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseCloudExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.properties"></a>

```typescript
public readonly properties: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a>

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput"></a>

```typescript
public readonly gcpOracleZoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: GoogleOracleDatabaseCloudExadataInfrastructureProperties;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureConfig <a name="GoogleOracleDatabaseCloudExadataInfrastructureConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

const googleOracleDatabaseCloudExadataInfrastructureConfig: googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly name for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | GCP location where Oracle Exadata is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#id GoogleOracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#project GoogleOracleDatabaseCloudExadataInfrastructure#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id GoogleOracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#location GoogleOracleDatabaseCloudExadataInfrastructure#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#deletion_policy GoogleOracleDatabaseCloudExadataInfrastructure#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#deletion_protection GoogleOracleDatabaseCloudExadataInfrastructure#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#display_name GoogleOracleDatabaseCloudExadataInfrastructure#display_name}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

GCP location where Oracle Exadata is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone GoogleOracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#id GoogleOracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#labels GoogleOracleDatabaseCloudExadataInfrastructure#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#project GoogleOracleDatabaseCloudExadataInfrastructure#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.properties"></a>

```typescript
public readonly properties: GoogleOracleDatabaseCloudExadataInfrastructureProperties;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#properties GoogleOracleDatabaseCloudExadataInfrastructure#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOracleDatabaseCloudExadataInfrastructureTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#timeouts GoogleOracleDatabaseCloudExadataInfrastructure#timeouts}

---

### GoogleOracleDatabaseCloudExadataInfrastructureProperties <a name="GoogleOracleDatabaseCloudExadataInfrastructureProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

const googleOracleDatabaseCloudExadataInfrastructureProperties: googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.shape">shape</a></code> | <code>string</code> | The shape of the Exadata Infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.computeCount">computeCount</a></code> | <code>number</code> | The number of compute servers for the Exadata Infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts">customerContacts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]</code> | customer_contacts block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.storageCount">storageCount</a></code> | <code>number</code> | The number of Cloud Exadata storage servers for the Exadata Infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb">totalStorageSizeGb</a></code> | <code>number</code> | The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB). |

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

The shape of the Exadata Infrastructure.

The shape determines the
amount of CPU, storage, and memory resources allocated to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#shape GoogleOracleDatabaseCloudExadataInfrastructure#shape}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

The number of compute servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#compute_count GoogleOracleDatabaseCloudExadataInfrastructure#compute_count}

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts"></a>

```typescript
public readonly customerContacts: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#customer_contacts GoogleOracleDatabaseCloudExadataInfrastructure#customer_contacts}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#maintenance_window GoogleOracleDatabaseCloudExadataInfrastructure#maintenance_window}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

The number of Cloud Exadata storage servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#storage_count GoogleOracleDatabaseCloudExadataInfrastructure#storage_count}

---

##### `totalStorageSizeGb`<sup>Optional</sup> <a name="totalStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb"></a>

```typescript
public readonly totalStorageSizeGb: number;
```

- *Type:* number

The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#total_storage_size_gb GoogleOracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}

---

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

const googleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts: googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email">email</a></code> | <code>string</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#email GoogleOracleDatabaseCloudExadataInfrastructure#email}

---

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

const googleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow: googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins">customActionTimeoutMins</a></code> | <code>number</code> | Determines the amount of time the system will wait before the start of each database server patching operation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Days during the week when maintenance should be performed. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | The window of hours during the day when maintenance should be performed. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek">leadTimeWeek</a></code> | <code>number</code> | Lead time window allows user to set a lead time to prepare for a down time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months">months</a></code> | <code>string[]</code> | Months during the year when maintenance should be performed. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode">patchingMode</a></code> | <code>string</code> | Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference">preference</a></code> | <code>string</code> | The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | Weeks during the month when maintenance should be performed. |

---

##### `customActionTimeoutMins`<sup>Optional</sup> <a name="customActionTimeoutMins" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins"></a>

```typescript
public readonly customActionTimeoutMins: number;
```

- *Type:* number

Determines the amount of time the system will wait before the start of each database server patching operation.

Custom action timeout is in minutes and
valid value is between 15 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins GoogleOracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Days during the week when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#days_of_week GoogleOracleDatabaseCloudExadataInfrastructure#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

The window of hours during the day when maintenance should be performed.

The window is a 4 hour slot. Valid values are:
  0 - represents time slot 0:00 - 3:59 UTC
  4 - represents time slot 4:00 - 7:59 UTC
  8 - represents time slot 8:00 - 11:59 UTC
  12 - represents time slot 12:00 - 15:59 UTC
  16 - represents time slot 16:00 - 19:59 UTC
  20 - represents time slot 20:00 - 23:59 UTC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#hours_of_day GoogleOracleDatabaseCloudExadataInfrastructure#hours_of_day}

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled GoogleOracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `leadTimeWeek`<sup>Optional</sup> <a name="leadTimeWeek" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek"></a>

```typescript
public readonly leadTimeWeek: number;
```

- *Type:* number

Lead time window allows user to set a lead time to prepare for a down time.

The lead time is in weeks and valid value is between 1 to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#lead_time_week GoogleOracleDatabaseCloudExadataInfrastructure#lead_time_week}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

Months during the year when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#months GoogleOracleDatabaseCloudExadataInfrastructure#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#patching_mode GoogleOracleDatabaseCloudExadataInfrastructure#patching_mode}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#preference GoogleOracleDatabaseCloudExadataInfrastructure#preference}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

Weeks during the month when maintenance should be performed.

Weeks start on
the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
days. Weeks start and end based on calendar dates, not days of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#weeks_of_month GoogleOracleDatabaseCloudExadataInfrastructure#weeks_of_month}

---

### GoogleOracleDatabaseCloudExadataInfrastructureTimeouts <a name="GoogleOracleDatabaseCloudExadataInfrastructureTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

const googleOracleDatabaseCloudExadataInfrastructureTimeouts: googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#create GoogleOracleDatabaseCloudExadataInfrastructure#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#delete GoogleOracleDatabaseCloudExadataInfrastructure#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#update GoogleOracleDatabaseCloudExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#create GoogleOracleDatabaseCloudExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#delete GoogleOracleDatabaseCloudExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#update GoogleOracleDatabaseCloudExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

new googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

new googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

new googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins">resetCustomActionTimeoutMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek">resetLeadTimeWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomActionTimeoutMins` <a name="resetCustomActionTimeoutMins" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins"></a>

```typescript
public resetCustomActionTimeoutMins(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```typescript
public resetHoursOfDay(): void
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```typescript
public resetIsCustomActionTimeoutEnabled(): void
```

##### `resetLeadTimeWeek` <a name="resetLeadTimeWeek" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek"></a>

```typescript
public resetLeadTimeWeek(): void
```

##### `resetMonths` <a name="resetMonths" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode"></a>

```typescript
public resetPatchingMode(): void
```

##### `resetPreference` <a name="resetPreference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput">customActionTimeoutMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput">leadTimeWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins">customActionTimeoutMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek">leadTimeWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutMinsInput`<sup>Optional</sup> <a name="customActionTimeoutMinsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput"></a>

```typescript
public readonly customActionTimeoutMinsInput: number;
```

- *Type:* number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```typescript
public readonly hoursOfDayInput: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```typescript
public readonly isCustomActionTimeoutEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `leadTimeWeekInput`<sup>Optional</sup> <a name="leadTimeWeekInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput"></a>

```typescript
public readonly leadTimeWeekInput: number;
```

- *Type:* number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```typescript
public readonly patchingModeInput: string;
```

- *Type:* string

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: number[];
```

- *Type:* number[]

---

##### `customActionTimeoutMins`<sup>Required</sup> <a name="customActionTimeoutMins" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins"></a>

```typescript
public readonly customActionTimeoutMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `leadTimeWeek`<sup>Required</sup> <a name="leadTimeWeek" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek"></a>

```typescript
public readonly leadTimeWeek: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

new googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount">resetStorageCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb">resetTotalStorageSizeGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContacts` <a name="putCustomerContacts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts"></a>

```typescript
public putCustomerContacts(value: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts"></a>

```typescript
public resetCustomerContacts(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetStorageCount` <a name="resetStorageCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount"></a>

```typescript
public resetStorageCount(): void
```

##### `resetTotalStorageSizeGb` <a name="resetTotalStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb"></a>

```typescript
public resetTotalStorageSizeGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount">activatedStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount">additionalStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb">availableStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion">dbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount">maxCpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb">maxDataStorageTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb">maxDbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb">maxMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion">monthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion">monthlyStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime">nextMaintenanceRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime">nextSecurityMaintenanceRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion">storageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput">customerContactsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput">storageCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput">totalStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount">storageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb">totalStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount"></a>

```typescript
public readonly activatedStorageCount: number;
```

- *Type:* number

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount"></a>

```typescript
public readonly additionalStorageCount: number;
```

- *Type:* number

---

##### `availableStorageSizeGb`<sup>Required</sup> <a name="availableStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb"></a>

```typescript
public readonly availableStorageSizeGb: number;
```

- *Type:* number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts"></a>

```typescript
public readonly customerContacts: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a>

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeGb`<sup>Required</sup> <a name="dbNodeStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```typescript
public readonly dbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion"></a>

```typescript
public readonly dbServerVersion: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount"></a>

```typescript
public readonly maxCpuCount: number;
```

- *Type:* number

---

##### `maxDataStorageTb`<sup>Required</sup> <a name="maxDataStorageTb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb"></a>

```typescript
public readonly maxDataStorageTb: number;
```

- *Type:* number

---

##### `maxDbNodeStorageSizeGb`<sup>Required</sup> <a name="maxDbNodeStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```typescript
public readonly maxDbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `maxMemoryGb`<sup>Required</sup> <a name="maxMemoryGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb"></a>

```typescript
public readonly maxMemoryGb: number;
```

- *Type:* number

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `monthlyDbServerVersion`<sup>Required</sup> <a name="monthlyDbServerVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion"></a>

```typescript
public readonly monthlyDbServerVersion: string;
```

- *Type:* string

---

##### `monthlyStorageServerVersion`<sup>Required</sup> <a name="monthlyStorageServerVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion"></a>

```typescript
public readonly monthlyStorageServerVersion: string;
```

- *Type:* string

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId"></a>

```typescript
public readonly nextMaintenanceRunId: string;
```

- *Type:* string

---

##### `nextMaintenanceRunTime`<sup>Required</sup> <a name="nextMaintenanceRunTime" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime"></a>

```typescript
public readonly nextMaintenanceRunTime: string;
```

- *Type:* string

---

##### `nextSecurityMaintenanceRunTime`<sup>Required</sup> <a name="nextSecurityMaintenanceRunTime" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime"></a>

```typescript
public readonly nextSecurityMaintenanceRunTime: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion"></a>

```typescript
public readonly storageServerVersion: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput"></a>

```typescript
public readonly customerContactsInput: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `storageCountInput`<sup>Optional</sup> <a name="storageCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput"></a>

```typescript
public readonly storageCountInput: number;
```

- *Type:* number

---

##### `totalStorageSizeGbInput`<sup>Optional</sup> <a name="totalStorageSizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput"></a>

```typescript
public readonly totalStorageSizeGbInput: number;
```

- *Type:* number

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

---

##### `totalStorageSizeGb`<sup>Required</sup> <a name="totalStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb"></a>

```typescript
public readonly totalStorageSizeGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseCloudExadataInfrastructureProperties;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---


### GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseCloudExadataInfrastructure } from '@cdktn/provider-google-beta'

new googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>

---



