# `googleAppEngineStandardAppVersion` Submodule <a name="`googleAppEngineStandardAppVersion` Submodule" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineStandardAppVersion <a name="GoogleAppEngineStandardAppVersion" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version google_app_engine_standard_app_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion(scope: Construct, id: string, config: GoogleAppEngineStandardAppVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig">GoogleAppEngineStandardAppVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig">GoogleAppEngineStandardAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling">putAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling">putBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint">putEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers">putHandlers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries">putLibraries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling">putManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector">putVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAppEngineApis">resetAppEngineApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAutomaticScaling">resetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetBasicScaling">resetBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetDeleteServiceOnDestroy">resetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetEnvVariables">resetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetHandlers">resetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInboundServices">resetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetLibraries">resetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetManualScaling">resetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetNoopOnDestroy">resetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetRuntimeApiVersion">resetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetThreadsafe">resetThreadsafe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVpcAccessConnector">resetVpcAccessConnector</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomaticScaling` <a name="putAutomaticScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling"></a>

```typescript
public putAutomaticScaling(value: GoogleAppEngineStandardAppVersionAutomaticScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

---

##### `putBasicScaling` <a name="putBasicScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling"></a>

```typescript
public putBasicScaling(value: GoogleAppEngineStandardAppVersionBasicScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

---

##### `putDeployment` <a name="putDeployment" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment"></a>

```typescript
public putDeployment(value: GoogleAppEngineStandardAppVersionDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

---

##### `putEntrypoint` <a name="putEntrypoint" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint"></a>

```typescript
public putEntrypoint(value: GoogleAppEngineStandardAppVersionEntrypoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

---

##### `putHandlers` <a name="putHandlers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers"></a>

```typescript
public putHandlers(value: IResolvable | GoogleAppEngineStandardAppVersionHandlers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>[]

---

##### `putLibraries` <a name="putLibraries" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries"></a>

```typescript
public putLibraries(value: IResolvable | GoogleAppEngineStandardAppVersionLibraries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>[]

---

##### `putManualScaling` <a name="putManualScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling"></a>

```typescript
public putManualScaling(value: GoogleAppEngineStandardAppVersionManualScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAppEngineStandardAppVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>

---

##### `putVpcAccessConnector` <a name="putVpcAccessConnector" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector"></a>

```typescript
public putVpcAccessConnector(value: GoogleAppEngineStandardAppVersionVpcAccessConnector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `resetAppEngineApis` <a name="resetAppEngineApis" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAppEngineApis"></a>

```typescript
public resetAppEngineApis(): void
```

##### `resetAutomaticScaling` <a name="resetAutomaticScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAutomaticScaling"></a>

```typescript
public resetAutomaticScaling(): void
```

##### `resetBasicScaling` <a name="resetBasicScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetBasicScaling"></a>

```typescript
public resetBasicScaling(): void
```

##### `resetDeleteServiceOnDestroy` <a name="resetDeleteServiceOnDestroy" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetDeleteServiceOnDestroy"></a>

```typescript
public resetDeleteServiceOnDestroy(): void
```

##### `resetEnvVariables` <a name="resetEnvVariables" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetEnvVariables"></a>

```typescript
public resetEnvVariables(): void
```

##### `resetHandlers` <a name="resetHandlers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetHandlers"></a>

```typescript
public resetHandlers(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInboundServices` <a name="resetInboundServices" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInboundServices"></a>

```typescript
public resetInboundServices(): void
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInstanceClass"></a>

```typescript
public resetInstanceClass(): void
```

##### `resetLibraries` <a name="resetLibraries" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetLibraries"></a>

```typescript
public resetLibraries(): void
```

##### `resetManualScaling` <a name="resetManualScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetManualScaling"></a>

```typescript
public resetManualScaling(): void
```

##### `resetNoopOnDestroy` <a name="resetNoopOnDestroy" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetNoopOnDestroy"></a>

```typescript
public resetNoopOnDestroy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRuntimeApiVersion` <a name="resetRuntimeApiVersion" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetRuntimeApiVersion"></a>

```typescript
public resetRuntimeApiVersion(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetThreadsafe` <a name="resetThreadsafe" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetThreadsafe"></a>

```typescript
public resetThreadsafe(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

##### `resetVpcAccessConnector` <a name="resetVpcAccessConnector" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVpcAccessConnector"></a>

```typescript
public resetVpcAccessConnector(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAppEngineStandardAppVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleAppEngineStandardAppVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineStandardAppVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineStandardAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineStandardAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScaling">automaticScaling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScaling">basicScaling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference">GoogleAppEngineStandardAppVersionBasicScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference">GoogleAppEngineStandardAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference">GoogleAppEngineStandardAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlers">handlers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList">GoogleAppEngineStandardAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.libraries">libraries</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList">GoogleAppEngineStandardAppVersionLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScaling">manualScaling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference">GoogleAppEngineStandardAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference">GoogleAppEngineStandardAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnector">vpcAccessConnector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApisInput">appEngineApisInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScalingInput">automaticScalingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScalingInput">basicScalingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroyInput">deleteServiceOnDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypointInput">entrypointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariablesInput">envVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlersInput">handlersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServicesInput">inboundServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.librariesInput">librariesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScalingInput">manualScalingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroyInput">noopOnDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersionInput">runtimeApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafeInput">threadsafeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnectorInput">vpcAccessConnectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApis">appEngineApis</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroy">deleteServiceOnDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServices">inboundServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroy">noopOnDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersion">runtimeApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafe">threadsafe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `automaticScaling`<sup>Required</sup> <a name="automaticScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScaling"></a>

```typescript
public readonly automaticScaling: GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference</a>

---

##### `basicScaling`<sup>Required</sup> <a name="basicScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScaling"></a>

```typescript
public readonly basicScaling: GoogleAppEngineStandardAppVersionBasicScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference">GoogleAppEngineStandardAppVersionBasicScalingOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deployment"></a>

```typescript
public readonly deployment: GoogleAppEngineStandardAppVersionDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference">GoogleAppEngineStandardAppVersionDeploymentOutputReference</a>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypoint"></a>

```typescript
public readonly entrypoint: GoogleAppEngineStandardAppVersionEntrypointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference">GoogleAppEngineStandardAppVersionEntrypointOutputReference</a>

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlers"></a>

```typescript
public readonly handlers: GoogleAppEngineStandardAppVersionHandlersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList">GoogleAppEngineStandardAppVersionHandlersList</a>

---

##### `libraries`<sup>Required</sup> <a name="libraries" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.libraries"></a>

```typescript
public readonly libraries: GoogleAppEngineStandardAppVersionLibrariesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList">GoogleAppEngineStandardAppVersionLibrariesList</a>

---

##### `manualScaling`<sup>Required</sup> <a name="manualScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScaling"></a>

```typescript
public readonly manualScaling: GoogleAppEngineStandardAppVersionManualScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference">GoogleAppEngineStandardAppVersionManualScalingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineStandardAppVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference">GoogleAppEngineStandardAppVersionTimeoutsOutputReference</a>

---

##### `vpcAccessConnector`<sup>Required</sup> <a name="vpcAccessConnector" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnector"></a>

```typescript
public readonly vpcAccessConnector: GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference</a>

---

##### `appEngineApisInput`<sup>Optional</sup> <a name="appEngineApisInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApisInput"></a>

```typescript
public readonly appEngineApisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `automaticScalingInput`<sup>Optional</sup> <a name="automaticScalingInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScalingInput"></a>

```typescript
public readonly automaticScalingInput: GoogleAppEngineStandardAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

---

##### `basicScalingInput`<sup>Optional</sup> <a name="basicScalingInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScalingInput"></a>

```typescript
public readonly basicScalingInput: GoogleAppEngineStandardAppVersionBasicScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

---

##### `deleteServiceOnDestroyInput`<sup>Optional</sup> <a name="deleteServiceOnDestroyInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroyInput"></a>

```typescript
public readonly deleteServiceOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: GoogleAppEngineStandardAppVersionDeployment;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: GoogleAppEngineStandardAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

---

##### `envVariablesInput`<sup>Optional</sup> <a name="envVariablesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariablesInput"></a>

```typescript
public readonly envVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `handlersInput`<sup>Optional</sup> <a name="handlersInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlersInput"></a>

```typescript
public readonly handlersInput: IResolvable | GoogleAppEngineStandardAppVersionHandlers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inboundServicesInput`<sup>Optional</sup> <a name="inboundServicesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServicesInput"></a>

```typescript
public readonly inboundServicesInput: string[];
```

- *Type:* string[]

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `librariesInput`<sup>Optional</sup> <a name="librariesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.librariesInput"></a>

```typescript
public readonly librariesInput: IResolvable | GoogleAppEngineStandardAppVersionLibraries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>[]

---

##### `manualScalingInput`<sup>Optional</sup> <a name="manualScalingInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScalingInput"></a>

```typescript
public readonly manualScalingInput: GoogleAppEngineStandardAppVersionManualScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

---

##### `noopOnDestroyInput`<sup>Optional</sup> <a name="noopOnDestroyInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroyInput"></a>

```typescript
public readonly noopOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runtimeApiVersionInput`<sup>Optional</sup> <a name="runtimeApiVersionInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersionInput"></a>

```typescript
public readonly runtimeApiVersionInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `threadsafeInput`<sup>Optional</sup> <a name="threadsafeInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafeInput"></a>

```typescript
public readonly threadsafeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAppEngineStandardAppVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `vpcAccessConnectorInput`<sup>Optional</sup> <a name="vpcAccessConnectorInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnectorInput"></a>

```typescript
public readonly vpcAccessConnectorInput: GoogleAppEngineStandardAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `appEngineApis`<sup>Required</sup> <a name="appEngineApis" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApis"></a>

```typescript
public readonly appEngineApis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteServiceOnDestroy`<sup>Required</sup> <a name="deleteServiceOnDestroy" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroy"></a>

```typescript
public readonly deleteServiceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `envVariables`<sup>Required</sup> <a name="envVariables" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inboundServices`<sup>Required</sup> <a name="inboundServices" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServices"></a>

```typescript
public readonly inboundServices: string[];
```

- *Type:* string[]

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `noopOnDestroy`<sup>Required</sup> <a name="noopOnDestroy" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroy"></a>

```typescript
public readonly noopOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `runtimeApiVersion`<sup>Required</sup> <a name="runtimeApiVersion" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersion"></a>

```typescript
public readonly runtimeApiVersion: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `threadsafe`<sup>Required</sup> <a name="threadsafe" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafe"></a>

```typescript
public readonly threadsafe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineStandardAppVersionAutomaticScaling <a name="GoogleAppEngineStandardAppVersionAutomaticScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionAutomaticScaling: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances">maxIdleInstances</a></code> | <code>number</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency">maxPendingLatency</a></code> | <code>string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency">minPendingLatency</a></code> | <code>string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings">standardSchedulerSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | standard_scheduler_settings block. |

---

##### `maxConcurrentRequests`<sup>Optional</sup> <a name="maxConcurrentRequests" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#max_concurrent_requests GoogleAppEngineStandardAppVersion#max_concurrent_requests}

---

##### `maxIdleInstances`<sup>Optional</sup> <a name="maxIdleInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```typescript
public readonly maxIdleInstances: number;
```

- *Type:* number

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#max_idle_instances GoogleAppEngineStandardAppVersion#max_idle_instances}

---

##### `maxPendingLatency`<sup>Optional</sup> <a name="maxPendingLatency" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```typescript
public readonly maxPendingLatency: string;
```

- *Type:* string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#max_pending_latency GoogleAppEngineStandardAppVersion#max_pending_latency}

---

##### `minIdleInstances`<sup>Optional</sup> <a name="minIdleInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#min_idle_instances GoogleAppEngineStandardAppVersion#min_idle_instances}

---

##### `minPendingLatency`<sup>Optional</sup> <a name="minPendingLatency" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency"></a>

```typescript
public readonly minPendingLatency: string;
```

- *Type:* string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#min_pending_latency GoogleAppEngineStandardAppVersion#min_pending_latency}

---

##### `standardSchedulerSettings`<sup>Optional</sup> <a name="standardSchedulerSettings" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings"></a>

```typescript
public readonly standardSchedulerSettings: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#standard_scheduler_settings GoogleAppEngineStandardAppVersion#standard_scheduler_settings}

---

### GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings <a name="GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances">maxInstances</a></code> | <code>number</code> | Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances">minInstances</a></code> | <code>number</code> | Minimum number of instances to run for this version. Set to zero to disable minInstances configuration. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | Target CPU utilization ratio to maintain when scaling. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization">targetThroughputUtilization</a></code> | <code>number</code> | Target throughput utilization ratio to maintain when scaling. |

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

**Note:** Starting from March 2025, App Engine sets the maxInstances default for standard environment deployments to 20. This change doesn't impact existing apps. To override the default, specify a new value between 0 and 2147483647, and deploy a new version or redeploy over an existing version. To disable the maxInstances default configuration setting, specify the maximum permitted value 2147483647.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#min_instances GoogleAppEngineStandardAppVersion#min_instances}

---

##### `targetCpuUtilization`<sup>Optional</sup> <a name="targetCpuUtilization" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization"></a>

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#target_cpu_utilization GoogleAppEngineStandardAppVersion#target_cpu_utilization}

---

##### `targetThroughputUtilization`<sup>Optional</sup> <a name="targetThroughputUtilization" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization"></a>

```typescript
public readonly targetThroughputUtilization: number;
```

- *Type:* number

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#target_throughput_utilization GoogleAppEngineStandardAppVersion#target_throughput_utilization}

---

### GoogleAppEngineStandardAppVersionBasicScaling <a name="GoogleAppEngineStandardAppVersionBasicScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionBasicScaling: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.maxInstances">maxInstances</a></code> | <code>number</code> | Maximum number of instances to create for this version. Must be in the range [1.0, 200.0]. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.idleTimeout">idleTimeout</a></code> | <code>string</code> | Duration of time after the last request that an instance must wait before the instance is shut down. |

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: string;
```

- *Type:* string

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#idle_timeout GoogleAppEngineStandardAppVersion#idle_timeout}

---

### GoogleAppEngineStandardAppVersionConfig <a name="GoogleAppEngineStandardAppVersionConfig" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionConfig: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtime">runtime</a></code> | <code>string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.service">service</a></code> | <code>string</code> | AppEngine service resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.appEngineApis">appEngineApis</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.automaticScaling">automaticScaling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.basicScaling">basicScaling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy">deleteServiceOnDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables available to the application. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.handlers">handlers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>[]</code> | handlers block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.inboundServices">inboundServices</a></code> | <code>string[]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.libraries">libraries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>[]</code> | libraries block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.manualScaling">manualScaling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.noopOnDestroy">noopOnDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtimeApiVersion">runtimeApiVersion</a></code> | <code>string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.threadsafe">threadsafe</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.versionId">versionId</a></code> | <code>string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.vpcAccessConnector">vpcAccessConnector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deployment"></a>

```typescript
public readonly deployment: GoogleAppEngineStandardAppVersionDeployment;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#deployment GoogleAppEngineStandardAppVersion#deployment}

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.entrypoint"></a>

```typescript
public readonly entrypoint: GoogleAppEngineStandardAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#entrypoint GoogleAppEngineStandardAppVersion#entrypoint}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#runtime GoogleAppEngineStandardAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

AppEngine service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#service GoogleAppEngineStandardAppVersion#service}

---

##### `appEngineApis`<sup>Optional</sup> <a name="appEngineApis" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.appEngineApis"></a>

```typescript
public readonly appEngineApis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#app_engine_apis GoogleAppEngineStandardAppVersion#app_engine_apis}

---

##### `automaticScaling`<sup>Optional</sup> <a name="automaticScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.automaticScaling"></a>

```typescript
public readonly automaticScaling: GoogleAppEngineStandardAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#automatic_scaling GoogleAppEngineStandardAppVersion#automatic_scaling}

---

##### `basicScaling`<sup>Optional</sup> <a name="basicScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.basicScaling"></a>

```typescript
public readonly basicScaling: GoogleAppEngineStandardAppVersionBasicScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#basic_scaling GoogleAppEngineStandardAppVersion#basic_scaling}

---

##### `deleteServiceOnDestroy`<sup>Optional</sup> <a name="deleteServiceOnDestroy" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy"></a>

```typescript
public readonly deleteServiceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#delete_service_on_destroy GoogleAppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `envVariables`<sup>Optional</sup> <a name="envVariables" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#env_variables GoogleAppEngineStandardAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.handlers"></a>

```typescript
public readonly handlers: IResolvable | GoogleAppEngineStandardAppVersionHandlers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>[]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#handlers GoogleAppEngineStandardAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundServices`<sup>Optional</sup> <a name="inboundServices" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.inboundServices"></a>

```typescript
public readonly inboundServices: string[];
```

- *Type:* string[]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#inbound_services GoogleAppEngineStandardAppVersion#inbound_services}

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#instance_class GoogleAppEngineStandardAppVersion#instance_class}

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.libraries"></a>

```typescript
public readonly libraries: IResolvable | GoogleAppEngineStandardAppVersionLibraries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>[]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#libraries GoogleAppEngineStandardAppVersion#libraries}

---

##### `manualScaling`<sup>Optional</sup> <a name="manualScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.manualScaling"></a>

```typescript
public readonly manualScaling: GoogleAppEngineStandardAppVersionManualScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#manual_scaling GoogleAppEngineStandardAppVersion#manual_scaling}

---

##### `noopOnDestroy`<sup>Optional</sup> <a name="noopOnDestroy" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.noopOnDestroy"></a>

```typescript
public readonly noopOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#noop_on_destroy GoogleAppEngineStandardAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}.

---

##### `runtimeApiVersion`<sup>Optional</sup> <a name="runtimeApiVersion" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtimeApiVersion"></a>

```typescript
public readonly runtimeApiVersion: string;
```

- *Type:* string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#runtime_api_version GoogleAppEngineStandardAppVersion#runtime_api_version}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#service_account GoogleAppEngineStandardAppVersion#service_account}

---

##### `threadsafe`<sup>Optional</sup> <a name="threadsafe" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.threadsafe"></a>

```typescript
public readonly threadsafe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#threadsafe GoogleAppEngineStandardAppVersion#threadsafe}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineStandardAppVersionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#timeouts GoogleAppEngineStandardAppVersion#timeouts}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#version_id GoogleAppEngineStandardAppVersion#version_id}

---

##### `vpcAccessConnector`<sup>Optional</sup> <a name="vpcAccessConnector" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.vpcAccessConnector"></a>

```typescript
public readonly vpcAccessConnector: GoogleAppEngineStandardAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#vpc_access_connector GoogleAppEngineStandardAppVersion#vpc_access_connector}

---

### GoogleAppEngineStandardAppVersionDeployment <a name="GoogleAppEngineStandardAppVersionDeployment" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionDeployment: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.files">files</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>[]</code> | files block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.zip">zip</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | zip block. |

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.files"></a>

```typescript
public readonly files: IResolvable | GoogleAppEngineStandardAppVersionDeploymentFiles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>[]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#files GoogleAppEngineStandardAppVersion#files}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.zip"></a>

```typescript
public readonly zip: GoogleAppEngineStandardAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#zip GoogleAppEngineStandardAppVersion#zip}

---

### GoogleAppEngineStandardAppVersionDeploymentFiles <a name="GoogleAppEngineStandardAppVersionDeploymentFiles" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionDeploymentFiles: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sha1Sum">sha1Sum</a></code> | <code>string</code> | SHA1 checksum of the file. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}.

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}

---

##### `sha1Sum`<sup>Optional</sup> <a name="sha1Sum" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sha1Sum"></a>

```typescript
public readonly sha1Sum: string;
```

- *Type:* string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#sha1_sum GoogleAppEngineStandardAppVersion#sha1_sum}

---

### GoogleAppEngineStandardAppVersionDeploymentZip <a name="GoogleAppEngineStandardAppVersionDeploymentZip" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionDeploymentZip: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.filesCount">filesCount</a></code> | <code>number</code> | files count. |

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}

---

##### `filesCount`<sup>Optional</sup> <a name="filesCount" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.filesCount"></a>

```typescript
public readonly filesCount: number;
```

- *Type:* number

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#files_count GoogleAppEngineStandardAppVersion#files_count}

---

### GoogleAppEngineStandardAppVersionEntrypoint <a name="GoogleAppEngineStandardAppVersionEntrypoint" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionEntrypoint: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.property.shell">shell</a></code> | <code>string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#shell GoogleAppEngineStandardAppVersion#shell}

---

### GoogleAppEngineStandardAppVersionHandlers <a name="GoogleAppEngineStandardAppVersionHandlers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionHandlers: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.authFailAction">authFailAction</a></code> | <code>string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.login">login</a></code> | <code>string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode">redirectHttpResponseCode</a></code> | <code>string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.script">script</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.securityLevel">securityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.staticFiles">staticFiles</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.urlRegex">urlRegex</a></code> | <code>string</code> | URL prefix. |

---

##### `authFailAction`<sup>Optional</sup> <a name="authFailAction" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#auth_fail_action GoogleAppEngineStandardAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#login GoogleAppEngineStandardAppVersion#login}

---

##### `redirectHttpResponseCode`<sup>Optional</sup> <a name="redirectHttpResponseCode" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode"></a>

```typescript
public readonly redirectHttpResponseCode: string;
```

- *Type:* string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#redirect_http_response_code GoogleAppEngineStandardAppVersion#redirect_http_response_code}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.script"></a>

```typescript
public readonly script: GoogleAppEngineStandardAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#script GoogleAppEngineStandardAppVersion#script}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#security_level GoogleAppEngineStandardAppVersion#security_level}

---

##### `staticFiles`<sup>Optional</sup> <a name="staticFiles" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.staticFiles"></a>

```typescript
public readonly staticFiles: GoogleAppEngineStandardAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#static_files GoogleAppEngineStandardAppVersion#static_files}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#url_regex GoogleAppEngineStandardAppVersion#url_regex}

---

### GoogleAppEngineStandardAppVersionHandlersScript <a name="GoogleAppEngineStandardAppVersionHandlersScript" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionHandlersScript: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.property.scriptPath">scriptPath</a></code> | <code>string</code> | Path to the script from the application root directory. |

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#script_path GoogleAppEngineStandardAppVersion#script_path}

---

### GoogleAppEngineStandardAppVersionHandlersStaticFiles <a name="GoogleAppEngineStandardAppVersionHandlersStaticFiles" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionHandlersStaticFiles: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable">applicationReadable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.expiration">expiration</a></code> | <code>string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.mimeType">mimeType</a></code> | <code>string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.path">path</a></code> | <code>string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile">requireMatchingFile</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex">uploadPathRegex</a></code> | <code>string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `applicationReadable`<sup>Optional</sup> <a name="applicationReadable" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```typescript
public readonly applicationReadable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#application_readable GoogleAppEngineStandardAppVersion#application_readable}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#expiration GoogleAppEngineStandardAppVersion#expiration}

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#http_headers GoogleAppEngineStandardAppVersion#http_headers}

---

##### `mimeType`<sup>Optional</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#mime_type GoogleAppEngineStandardAppVersion#mime_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#path GoogleAppEngineStandardAppVersion#path}

---

##### `requireMatchingFile`<sup>Optional</sup> <a name="requireMatchingFile" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```typescript
public readonly requireMatchingFile: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#require_matching_file GoogleAppEngineStandardAppVersion#require_matching_file}

---

##### `uploadPathRegex`<sup>Optional</sup> <a name="uploadPathRegex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```typescript
public readonly uploadPathRegex: string;
```

- *Type:* string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#upload_path_regex GoogleAppEngineStandardAppVersion#upload_path_regex}

---

### GoogleAppEngineStandardAppVersionLibraries <a name="GoogleAppEngineStandardAppVersionLibraries" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionLibraries: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.name">name</a></code> | <code>string</code> | Name of the library. Example "django". |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.version">version</a></code> | <code>string</code> | Version of the library to select, or "latest". |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the library. Example "django".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the library to select, or "latest".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#version GoogleAppEngineStandardAppVersion#version}

---

### GoogleAppEngineStandardAppVersionManualScaling <a name="GoogleAppEngineStandardAppVersionManualScaling" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionManualScaling: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.property.instances">instances</a></code> | <code>number</code> | Number of instances to assign to the service at the start. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#instances GoogleAppEngineStandardAppVersion#instances}

---

### GoogleAppEngineStandardAppVersionTimeouts <a name="GoogleAppEngineStandardAppVersionTimeouts" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionTimeouts: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#create GoogleAppEngineStandardAppVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#delete GoogleAppEngineStandardAppVersion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#update GoogleAppEngineStandardAppVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#create GoogleAppEngineStandardAppVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#delete GoogleAppEngineStandardAppVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#update GoogleAppEngineStandardAppVersion#update}.

---

### GoogleAppEngineStandardAppVersionVpcAccessConnector <a name="GoogleAppEngineStandardAppVersionVpcAccessConnector" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

const googleAppEngineStandardAppVersionVpcAccessConnector: googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.name">name</a></code> | <code>string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.egressSetting">egressSetting</a></code> | <code>string</code> | The egress setting for the connector, controlling what traffic is diverted through it. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}

---

##### `egressSetting`<sup>Optional</sup> <a name="egressSetting" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.egressSetting"></a>

```typescript
public readonly egressSetting: string;
```

- *Type:* string

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_app_engine_standard_app_version#egress_setting GoogleAppEngineStandardAppVersion#egress_setting}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference <a name="GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings">putStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">resetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">resetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">resetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">resetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">resetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings">resetStandardSchedulerSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandardSchedulerSettings` <a name="putStandardSchedulerSettings" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings"></a>

```typescript
public putStandardSchedulerSettings(value: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `resetMaxConcurrentRequests` <a name="resetMaxConcurrentRequests" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```typescript
public resetMaxConcurrentRequests(): void
```

##### `resetMaxIdleInstances` <a name="resetMaxIdleInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```typescript
public resetMaxIdleInstances(): void
```

##### `resetMaxPendingLatency` <a name="resetMaxPendingLatency" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```typescript
public resetMaxPendingLatency(): void
```

##### `resetMinIdleInstances` <a name="resetMinIdleInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```typescript
public resetMinIdleInstances(): void
```

##### `resetMinPendingLatency` <a name="resetMinPendingLatency" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```typescript
public resetMinPendingLatency(): void
```

##### `resetStandardSchedulerSettings` <a name="resetStandardSchedulerSettings" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings"></a>

```typescript
public resetStandardSchedulerSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings">standardSchedulerSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">maxConcurrentRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">maxIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">maxPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">minIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">minPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput">standardSchedulerSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">maxIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">maxPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency">minPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standardSchedulerSettings`<sup>Required</sup> <a name="standardSchedulerSettings" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings"></a>

```typescript
public readonly standardSchedulerSettings: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a>

---

##### `maxConcurrentRequestsInput`<sup>Optional</sup> <a name="maxConcurrentRequestsInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```typescript
public readonly maxConcurrentRequestsInput: number;
```

- *Type:* number

---

##### `maxIdleInstancesInput`<sup>Optional</sup> <a name="maxIdleInstancesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```typescript
public readonly maxIdleInstancesInput: number;
```

- *Type:* number

---

##### `maxPendingLatencyInput`<sup>Optional</sup> <a name="maxPendingLatencyInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```typescript
public readonly maxPendingLatencyInput: string;
```

- *Type:* string

---

##### `minIdleInstancesInput`<sup>Optional</sup> <a name="minIdleInstancesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```typescript
public readonly minIdleInstancesInput: number;
```

- *Type:* number

---

##### `minPendingLatencyInput`<sup>Optional</sup> <a name="minPendingLatencyInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```typescript
public readonly minPendingLatencyInput: string;
```

- *Type:* string

---

##### `standardSchedulerSettingsInput`<sup>Optional</sup> <a name="standardSchedulerSettingsInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput"></a>

```typescript
public readonly standardSchedulerSettingsInput: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `maxConcurrentRequests`<sup>Required</sup> <a name="maxConcurrentRequests" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

---

##### `maxIdleInstances`<sup>Required</sup> <a name="maxIdleInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```typescript
public readonly maxIdleInstances: number;
```

- *Type:* number

---

##### `maxPendingLatency`<sup>Required</sup> <a name="maxPendingLatency" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```typescript
public readonly maxPendingLatency: string;
```

- *Type:* string

---

##### `minIdleInstances`<sup>Required</sup> <a name="minIdleInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

---

##### `minPendingLatency`<sup>Required</sup> <a name="minPendingLatency" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```typescript
public readonly minPendingLatency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

---


### GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference <a name="GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization">resetTargetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization">resetTargetThroughputUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances"></a>

```typescript
public resetMaxInstances(): void
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances"></a>

```typescript
public resetMinInstances(): void
```

##### `resetTargetCpuUtilization` <a name="resetTargetCpuUtilization" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization"></a>

```typescript
public resetTargetCpuUtilization(): void
```

##### `resetTargetThroughputUtilization` <a name="resetTargetThroughputUtilization" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization"></a>

```typescript
public resetTargetThroughputUtilization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput">minInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput">targetCpuUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput">targetThroughputUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances">minInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization">targetThroughputUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput"></a>

```typescript
public readonly maxInstancesInput: number;
```

- *Type:* number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput"></a>

```typescript
public readonly minInstancesInput: number;
```

- *Type:* number

---

##### `targetCpuUtilizationInput`<sup>Optional</sup> <a name="targetCpuUtilizationInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput"></a>

```typescript
public readonly targetCpuUtilizationInput: number;
```

- *Type:* number

---

##### `targetThroughputUtilizationInput`<sup>Optional</sup> <a name="targetThroughputUtilizationInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput"></a>

```typescript
public readonly targetThroughputUtilizationInput: number;
```

- *Type:* number

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

---

##### `targetCpuUtilization`<sup>Required</sup> <a name="targetCpuUtilization" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization"></a>

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number

---

##### `targetThroughputUtilization`<sup>Required</sup> <a name="targetThroughputUtilization" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization"></a>

```typescript
public readonly targetThroughputUtilization: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---


### GoogleAppEngineStandardAppVersionBasicScalingOutputReference <a name="GoogleAppEngineStandardAppVersionBasicScalingOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout"></a>

```typescript
public resetIdleTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput"></a>

```typescript
public readonly idleTimeoutInput: string;
```

- *Type:* string

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput"></a>

```typescript
public readonly maxInstancesInput: number;
```

- *Type:* number

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: string;
```

- *Type:* string

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionBasicScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

---


### GoogleAppEngineStandardAppVersionDeploymentFilesList <a name="GoogleAppEngineStandardAppVersionDeploymentFilesList" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get"></a>

```typescript
public get(index: number): GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineStandardAppVersionDeploymentFiles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>[]

---


### GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum">resetSha1Sum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSha1Sum` <a name="resetSha1Sum" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```typescript
public resetSha1Sum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput">sha1SumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum">sha1Sum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sha1SumInput`<sup>Optional</sup> <a name="sha1SumInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```typescript
public readonly sha1SumInput: string;
```

- *Type:* string

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sha1Sum`<sup>Required</sup> <a name="sha1Sum" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```typescript
public readonly sha1Sum: string;
```

- *Type:* string

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineStandardAppVersionDeploymentFiles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>

---


### GoogleAppEngineStandardAppVersionDeploymentOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles">putFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip">putZip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetFiles">resetFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetZip">resetZip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFiles` <a name="putFiles" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles"></a>

```typescript
public putFiles(value: IResolvable | GoogleAppEngineStandardAppVersionDeploymentFiles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>[]

---

##### `putZip` <a name="putZip" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip"></a>

```typescript
public putZip(value: GoogleAppEngineStandardAppVersionDeploymentZip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

---

##### `resetFiles` <a name="resetFiles" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetFiles"></a>

```typescript
public resetFiles(): void
```

##### `resetZip` <a name="resetZip" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetZip"></a>

```typescript
public resetZip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.files">files</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList">GoogleAppEngineStandardAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference">GoogleAppEngineStandardAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.filesInput">filesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zipInput">zipInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.files"></a>

```typescript
public readonly files: GoogleAppEngineStandardAppVersionDeploymentFilesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList">GoogleAppEngineStandardAppVersionDeploymentFilesList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zip"></a>

```typescript
public readonly zip: GoogleAppEngineStandardAppVersionDeploymentZipOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference">GoogleAppEngineStandardAppVersionDeploymentZipOutputReference</a>

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.filesInput"></a>

```typescript
public readonly filesInput: IResolvable | GoogleAppEngineStandardAppVersionDeploymentFiles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>[]

---

##### `zipInput`<sup>Optional</sup> <a name="zipInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zipInput"></a>

```typescript
public readonly zipInput: GoogleAppEngineStandardAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionDeployment;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

---


### GoogleAppEngineStandardAppVersionDeploymentZipOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentZipOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount">resetFilesCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilesCount` <a name="resetFilesCount" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```typescript
public resetFilesCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput">filesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount">filesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesCountInput`<sup>Optional</sup> <a name="filesCountInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```typescript
public readonly filesCountInput: number;
```

- *Type:* number

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `filesCount`<sup>Required</sup> <a name="filesCount" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```typescript
public readonly filesCount: number;
```

- *Type:* number

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

---


### GoogleAppEngineStandardAppVersionEntrypointOutputReference <a name="GoogleAppEngineStandardAppVersionEntrypointOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shellInput">shellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shell">shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shellInput`<sup>Optional</sup> <a name="shellInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shellInput"></a>

```typescript
public readonly shellInput: string;
```

- *Type:* string

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

---


### GoogleAppEngineStandardAppVersionHandlersList <a name="GoogleAppEngineStandardAppVersionHandlersList" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get"></a>

```typescript
public get(index: number): GoogleAppEngineStandardAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineStandardAppVersionHandlers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>[]

---


### GoogleAppEngineStandardAppVersionHandlersOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript">putScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles">putStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction">resetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">resetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetScript">resetScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles">resetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScript` <a name="putScript" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript"></a>

```typescript
public putScript(value: GoogleAppEngineStandardAppVersionHandlersScript): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

---

##### `putStaticFiles` <a name="putStaticFiles" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles"></a>

```typescript
public putStaticFiles(value: GoogleAppEngineStandardAppVersionHandlersStaticFiles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `resetAuthFailAction` <a name="resetAuthFailAction" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```typescript
public resetAuthFailAction(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetRedirectHttpResponseCode` <a name="resetRedirectHttpResponseCode" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```typescript
public resetRedirectHttpResponseCode(): void
```

##### `resetScript` <a name="resetScript" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetScript"></a>

```typescript
public resetScript(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetStaticFiles` <a name="resetStaticFiles" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles"></a>

```typescript
public resetStaticFiles(): void
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex"></a>

```typescript
public resetUrlRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.script">script</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference">GoogleAppEngineStandardAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFiles">staticFiles</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput">authFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">redirectHttpResponseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.scriptInput">scriptInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput">staticFilesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput">urlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailAction">authFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode">redirectHttpResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegex">urlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.script"></a>

```typescript
public readonly script: GoogleAppEngineStandardAppVersionHandlersScriptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference">GoogleAppEngineStandardAppVersionHandlersScriptOutputReference</a>

---

##### `staticFiles`<sup>Required</sup> <a name="staticFiles" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFiles"></a>

```typescript
public readonly staticFiles: GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference</a>

---

##### `authFailActionInput`<sup>Optional</sup> <a name="authFailActionInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```typescript
public readonly authFailActionInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `redirectHttpResponseCodeInput`<sup>Optional</sup> <a name="redirectHttpResponseCodeInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```typescript
public readonly redirectHttpResponseCodeInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: GoogleAppEngineStandardAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `staticFilesInput`<sup>Optional</sup> <a name="staticFilesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```typescript
public readonly staticFilesInput: GoogleAppEngineStandardAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```typescript
public readonly urlRegexInput: string;
```

- *Type:* string

---

##### `authFailAction`<sup>Required</sup> <a name="authFailAction" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `redirectHttpResponseCode`<sup>Required</sup> <a name="redirectHttpResponseCode" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```typescript
public readonly redirectHttpResponseCode: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineStandardAppVersionHandlers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>

---


### GoogleAppEngineStandardAppVersionHandlersScriptOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersScriptOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput">scriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath">scriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptPathInput`<sup>Optional</sup> <a name="scriptPathInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```typescript
public readonly scriptPathInput: string;
```

- *Type:* string

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

---


### GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">resetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType">resetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">resetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">resetUploadPathRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationReadable` <a name="resetApplicationReadable" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```typescript
public resetApplicationReadable(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetMimeType` <a name="resetMimeType" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```typescript
public resetMimeType(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequireMatchingFile` <a name="resetRequireMatchingFile" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```typescript
public resetRequireMatchingFile(): void
```

##### `resetUploadPathRegex` <a name="resetUploadPathRegex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```typescript
public resetUploadPathRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">applicationReadableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput">expirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">requireMatchingFileInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">uploadPathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">applicationReadable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">requireMatchingFile</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">uploadPathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationReadableInput`<sup>Optional</sup> <a name="applicationReadableInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```typescript
public readonly applicationReadableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: string;
```

- *Type:* string

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `requireMatchingFileInput`<sup>Optional</sup> <a name="requireMatchingFileInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```typescript
public readonly requireMatchingFileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `uploadPathRegexInput`<sup>Optional</sup> <a name="uploadPathRegexInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```typescript
public readonly uploadPathRegexInput: string;
```

- *Type:* string

---

##### `applicationReadable`<sup>Required</sup> <a name="applicationReadable" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```typescript
public readonly applicationReadable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `requireMatchingFile`<sup>Required</sup> <a name="requireMatchingFile" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```typescript
public readonly requireMatchingFile: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `uploadPathRegex`<sup>Required</sup> <a name="uploadPathRegex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```typescript
public readonly uploadPathRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

---


### GoogleAppEngineStandardAppVersionLibrariesList <a name="GoogleAppEngineStandardAppVersionLibrariesList" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get"></a>

```typescript
public get(index: number): GoogleAppEngineStandardAppVersionLibrariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineStandardAppVersionLibraries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>[]

---


### GoogleAppEngineStandardAppVersionLibrariesOutputReference <a name="GoogleAppEngineStandardAppVersionLibrariesOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineStandardAppVersionLibraries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>

---


### GoogleAppEngineStandardAppVersionManualScalingOutputReference <a name="GoogleAppEngineStandardAppVersionManualScalingOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput">instancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instances">instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: number;
```

- *Type:* number

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionManualScaling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

---


### GoogleAppEngineStandardAppVersionTimeoutsOutputReference <a name="GoogleAppEngineStandardAppVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineStandardAppVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>

---


### GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference <a name="GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```typescript
import { googleAppEngineStandardAppVersion } from '@cdktn/provider-google-beta'

new googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting">resetEgressSetting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEgressSetting` <a name="resetEgressSetting" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting"></a>

```typescript
public resetEgressSetting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput">egressSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting">egressSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `egressSettingInput`<sup>Optional</sup> <a name="egressSettingInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput"></a>

```typescript
public readonly egressSettingInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `egressSetting`<sup>Required</sup> <a name="egressSetting" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting"></a>

```typescript
public readonly egressSetting: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineStandardAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

---



