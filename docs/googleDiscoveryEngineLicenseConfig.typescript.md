# `googleDiscoveryEngineLicenseConfig` Submodule <a name="`googleDiscoveryEngineLicenseConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineLicenseConfig <a name="GoogleDiscoveryEngineLicenseConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config google_discovery_engine_license_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig(scope: Construct, id: string, config: GoogleDiscoveryEngineLicenseConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig">GoogleDiscoveryEngineLicenseConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig">GoogleDiscoveryEngineLicenseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetFreeTrial">resetFreeTrial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndDate` <a name="putEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate"></a>

```typescript
public putEndDate(value: GoogleDiscoveryEngineLicenseConfigEndDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate"></a>

```typescript
public putStartDate(value: GoogleDiscoveryEngineLicenseConfigStartDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineLicenseConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetFreeTrial` <a name="resetFreeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetFreeTrial"></a>

```typescript
public resetFreeTrial(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineLicenseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineLicenseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineLicenseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference">GoogleDiscoveryEngineLicenseConfigEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference">GoogleDiscoveryEngineLicenseConfigStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference">GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrialInput">freeTrialInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigIdInput">licenseConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCountInput">licenseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTermInput">subscriptionTermInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTierInput">subscriptionTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrial">freeTrial</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigId">licenseConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCount">licenseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTerm">subscriptionTerm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTier">subscriptionTier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDate"></a>

```typescript
public readonly endDate: GoogleDiscoveryEngineLicenseConfigEndDateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference">GoogleDiscoveryEngineLicenseConfigEndDateOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDate"></a>

```typescript
public readonly startDate: GoogleDiscoveryEngineLicenseConfigStartDateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference">GoogleDiscoveryEngineLicenseConfigStartDateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference">GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDateInput"></a>

```typescript
public readonly endDateInput: GoogleDiscoveryEngineLicenseConfigEndDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---

##### `freeTrialInput`<sup>Optional</sup> <a name="freeTrialInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrialInput"></a>

```typescript
public readonly freeTrialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseConfigIdInput`<sup>Optional</sup> <a name="licenseConfigIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigIdInput"></a>

```typescript
public readonly licenseConfigIdInput: string;
```

- *Type:* string

---

##### `licenseCountInput`<sup>Optional</sup> <a name="licenseCountInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCountInput"></a>

```typescript
public readonly licenseCountInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDateInput"></a>

```typescript
public readonly startDateInput: GoogleDiscoveryEngineLicenseConfigStartDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---

##### `subscriptionTermInput`<sup>Optional</sup> <a name="subscriptionTermInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTermInput"></a>

```typescript
public readonly subscriptionTermInput: string;
```

- *Type:* string

---

##### `subscriptionTierInput`<sup>Optional</sup> <a name="subscriptionTierInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTierInput"></a>

```typescript
public readonly subscriptionTierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineLicenseConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `freeTrial`<sup>Required</sup> <a name="freeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrial"></a>

```typescript
public readonly freeTrial: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseConfigId`<sup>Required</sup> <a name="licenseConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigId"></a>

```typescript
public readonly licenseConfigId: string;
```

- *Type:* string

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subscriptionTerm`<sup>Required</sup> <a name="subscriptionTerm" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTerm"></a>

```typescript
public readonly subscriptionTerm: string;
```

- *Type:* string

---

##### `subscriptionTier`<sup>Required</sup> <a name="subscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTier"></a>

```typescript
public readonly subscriptionTier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineLicenseConfigConfig <a name="GoogleDiscoveryEngineLicenseConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineLicenseConfigConfig: googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseConfigId">licenseConfigId</a></code> | <code>string</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseCount">licenseCount</a></code> | <code>number</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTerm">subscriptionTerm</a></code> | <code>string</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTier">subscriptionTier</a></code> | <code>string</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.freeTrial">freeTrial</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `licenseConfigId`<sup>Required</sup> <a name="licenseConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseConfigId"></a>

```typescript
public readonly licenseConfigId: string;
```

- *Type:* string

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#license_config_id GoogleDiscoveryEngineLicenseConfig#license_config_id}

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#license_count GoogleDiscoveryEngineLicenseConfig#license_count}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#location GoogleDiscoveryEngineLicenseConfig#location}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.startDate"></a>

```typescript
public readonly startDate: GoogleDiscoveryEngineLicenseConfigStartDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#start_date GoogleDiscoveryEngineLicenseConfig#start_date}

---

##### `subscriptionTerm`<sup>Required</sup> <a name="subscriptionTerm" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTerm"></a>

```typescript
public readonly subscriptionTerm: string;
```

- *Type:* string

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#subscription_term GoogleDiscoveryEngineLicenseConfig#subscription_term}

---

##### `subscriptionTier`<sup>Required</sup> <a name="subscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTier"></a>

```typescript
public readonly subscriptionTier: string;
```

- *Type:* string

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#subscription_tier GoogleDiscoveryEngineLicenseConfig#subscription_tier}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#auto_renew GoogleDiscoveryEngineLicenseConfig#auto_renew}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.endDate"></a>

```typescript
public readonly endDate: GoogleDiscoveryEngineLicenseConfigEndDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#end_date GoogleDiscoveryEngineLicenseConfig#end_date}

---

##### `freeTrial`<sup>Optional</sup> <a name="freeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.freeTrial"></a>

```typescript
public readonly freeTrial: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#free_trial GoogleDiscoveryEngineLicenseConfig#free_trial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineLicenseConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#timeouts GoogleDiscoveryEngineLicenseConfig#timeouts}

---

### GoogleDiscoveryEngineLicenseConfigEndDate <a name="GoogleDiscoveryEngineLicenseConfigEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.Initializer"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineLicenseConfigEndDate: googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

### GoogleDiscoveryEngineLicenseConfigStartDate <a name="GoogleDiscoveryEngineLicenseConfigStartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.Initializer"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineLicenseConfigStartDate: googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

### GoogleDiscoveryEngineLicenseConfigTimeouts <a name="GoogleDiscoveryEngineLicenseConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineLicenseConfigTimeouts: googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineLicenseConfigEndDateOutputReference <a name="GoogleDiscoveryEngineLicenseConfigEndDateOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineLicenseConfigEndDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---


### GoogleDiscoveryEngineLicenseConfigStartDateOutputReference <a name="GoogleDiscoveryEngineLicenseConfigStartDateOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineLicenseConfigStartDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---


### GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineLicenseConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineLicenseConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---



