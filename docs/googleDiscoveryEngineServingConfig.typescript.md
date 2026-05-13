# `googleDiscoveryEngineServingConfig` Submodule <a name="`googleDiscoveryEngineServingConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineServingConfig <a name="GoogleDiscoveryEngineServingConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config google_discovery_engine_serving_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineServingConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig(scope: Construct, id: string, config: GoogleDiscoveryEngineServingConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig">GoogleDiscoveryEngineServingConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig">GoogleDiscoveryEngineServingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetBoostControlIds">resetBoostControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetFilterControlIds">resetFilterControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetPromoteControlIds">resetPromoteControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetRedirectControlIds">resetRedirectControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetServingConfigId">resetServingConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetSynonymsControlIds">resetSynonymsControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineServingConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a>

---

##### `resetBoostControlIds` <a name="resetBoostControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetBoostControlIds"></a>

```typescript
public resetBoostControlIds(): void
```

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetCollectionId"></a>

```typescript
public resetCollectionId(): void
```

##### `resetFilterControlIds` <a name="resetFilterControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetFilterControlIds"></a>

```typescript
public resetFilterControlIds(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPromoteControlIds` <a name="resetPromoteControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetPromoteControlIds"></a>

```typescript
public resetPromoteControlIds(): void
```

##### `resetRedirectControlIds` <a name="resetRedirectControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetRedirectControlIds"></a>

```typescript
public resetRedirectControlIds(): void
```

##### `resetServingConfigId` <a name="resetServingConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetServingConfigId"></a>

```typescript
public resetServingConfigId(): void
```

##### `resetSynonymsControlIds` <a name="resetSynonymsControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetSynonymsControlIds"></a>

```typescript
public resetSynonymsControlIds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isConstruct"></a>

```typescript
import { googleDiscoveryEngineServingConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineServingConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineServingConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineServingConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineServingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineServingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineServingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference">GoogleDiscoveryEngineServingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.boostControlIdsInput">boostControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.filterControlIdsInput">filterControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.promoteControlIdsInput">promoteControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.redirectControlIdsInput">redirectControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.servingConfigIdInput">servingConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.synonymsControlIdsInput">synonymsControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.boostControlIds">boostControlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.filterControlIds">filterControlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.promoteControlIds">promoteControlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.redirectControlIds">redirectControlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.servingConfigId">servingConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.synonymsControlIds">synonymsControlIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineServingConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference">GoogleDiscoveryEngineServingConfigTimeoutsOutputReference</a>

---

##### `boostControlIdsInput`<sup>Optional</sup> <a name="boostControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.boostControlIdsInput"></a>

```typescript
public readonly boostControlIdsInput: string[];
```

- *Type:* string[]

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `filterControlIdsInput`<sup>Optional</sup> <a name="filterControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.filterControlIdsInput"></a>

```typescript
public readonly filterControlIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `promoteControlIdsInput`<sup>Optional</sup> <a name="promoteControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.promoteControlIdsInput"></a>

```typescript
public readonly promoteControlIdsInput: string[];
```

- *Type:* string[]

---

##### `redirectControlIdsInput`<sup>Optional</sup> <a name="redirectControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.redirectControlIdsInput"></a>

```typescript
public readonly redirectControlIdsInput: string[];
```

- *Type:* string[]

---

##### `servingConfigIdInput`<sup>Optional</sup> <a name="servingConfigIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.servingConfigIdInput"></a>

```typescript
public readonly servingConfigIdInput: string;
```

- *Type:* string

---

##### `synonymsControlIdsInput`<sup>Optional</sup> <a name="synonymsControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.synonymsControlIdsInput"></a>

```typescript
public readonly synonymsControlIdsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineServingConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a>

---

##### `boostControlIds`<sup>Required</sup> <a name="boostControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.boostControlIds"></a>

```typescript
public readonly boostControlIds: string[];
```

- *Type:* string[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `filterControlIds`<sup>Required</sup> <a name="filterControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.filterControlIds"></a>

```typescript
public readonly filterControlIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `promoteControlIds`<sup>Required</sup> <a name="promoteControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.promoteControlIds"></a>

```typescript
public readonly promoteControlIds: string[];
```

- *Type:* string[]

---

##### `redirectControlIds`<sup>Required</sup> <a name="redirectControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.redirectControlIds"></a>

```typescript
public readonly redirectControlIds: string[];
```

- *Type:* string[]

---

##### `servingConfigId`<sup>Required</sup> <a name="servingConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.servingConfigId"></a>

```typescript
public readonly servingConfigId: string;
```

- *Type:* string

---

##### `synonymsControlIds`<sup>Required</sup> <a name="synonymsControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.synonymsControlIds"></a>

```typescript
public readonly synonymsControlIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineServingConfigConfig <a name="GoogleDiscoveryEngineServingConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineServingConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineServingConfigConfig: googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.engineId">engineId</a></code> | <code>string</code> | The ID of the engine associated with the serving config. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.boostControlIds">boostControlIds</a></code> | <code>string[]</code> | The resource IDs of the boost controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.filterControlIds">filterControlIds</a></code> | <code>string[]</code> | The resource IDs of the filter controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#id GoogleDiscoveryEngineServingConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#project GoogleDiscoveryEngineServingConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.promoteControlIds">promoteControlIds</a></code> | <code>string[]</code> | The resource IDs of the promote controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.redirectControlIds">redirectControlIds</a></code> | <code>string[]</code> | The resource IDs of the redirect controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.servingConfigId">servingConfigId</a></code> | <code>string</code> | 'The unique ID of the serving config. Currently only accepts "default_search".'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.synonymsControlIds">synonymsControlIds</a></code> | <code>string[]</code> | The resource IDs of the synonyms controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

The ID of the engine associated with the serving config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#engine_id GoogleDiscoveryEngineServingConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#location GoogleDiscoveryEngineServingConfig#location}

---

##### `boostControlIds`<sup>Optional</sup> <a name="boostControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.boostControlIds"></a>

```typescript
public readonly boostControlIds: string[];
```

- *Type:* string[]

The resource IDs of the boost controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#boost_control_ids GoogleDiscoveryEngineServingConfig#boost_control_ids}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#collection_id GoogleDiscoveryEngineServingConfig#collection_id}

---

##### `filterControlIds`<sup>Optional</sup> <a name="filterControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.filterControlIds"></a>

```typescript
public readonly filterControlIds: string[];
```

- *Type:* string[]

The resource IDs of the filter controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#filter_control_ids GoogleDiscoveryEngineServingConfig#filter_control_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#id GoogleDiscoveryEngineServingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#project GoogleDiscoveryEngineServingConfig#project}.

---

##### `promoteControlIds`<sup>Optional</sup> <a name="promoteControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.promoteControlIds"></a>

```typescript
public readonly promoteControlIds: string[];
```

- *Type:* string[]

The resource IDs of the promote controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#promote_control_ids GoogleDiscoveryEngineServingConfig#promote_control_ids}

---

##### `redirectControlIds`<sup>Optional</sup> <a name="redirectControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.redirectControlIds"></a>

```typescript
public readonly redirectControlIds: string[];
```

- *Type:* string[]

The resource IDs of the redirect controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#redirect_control_ids GoogleDiscoveryEngineServingConfig#redirect_control_ids}

---

##### `servingConfigId`<sup>Optional</sup> <a name="servingConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.servingConfigId"></a>

```typescript
public readonly servingConfigId: string;
```

- *Type:* string

'The unique ID of the serving config. Currently only accepts "default_search".'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#serving_config_id GoogleDiscoveryEngineServingConfig#serving_config_id}

---

##### `synonymsControlIds`<sup>Optional</sup> <a name="synonymsControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.synonymsControlIds"></a>

```typescript
public readonly synonymsControlIds: string[];
```

- *Type:* string[]

The resource IDs of the synonyms controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#synonyms_control_ids GoogleDiscoveryEngineServingConfig#synonyms_control_ids}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineServingConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#timeouts GoogleDiscoveryEngineServingConfig#timeouts}

---

### GoogleDiscoveryEngineServingConfigTimeouts <a name="GoogleDiscoveryEngineServingConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineServingConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineServingConfigTimeouts: googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#create GoogleDiscoveryEngineServingConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#delete GoogleDiscoveryEngineServingConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#update GoogleDiscoveryEngineServingConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#create GoogleDiscoveryEngineServingConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#delete GoogleDiscoveryEngineServingConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_serving_config#update GoogleDiscoveryEngineServingConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineServingConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineServingConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineServingConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineServingConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a>

---



