# `googleDiscoveryEngineAssistant` Submodule <a name="`googleDiscoveryEngineAssistant` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineAssistant <a name="GoogleDiscoveryEngineAssistant" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant google_discovery_engine_assistant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant(scope: Construct, id: string, config: GoogleDiscoveryEngineAssistantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig">GoogleDiscoveryEngineAssistantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig">GoogleDiscoveryEngineAssistantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy">putCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig">putGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetCustomerPolicy">resetCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetGenerationConfig">resetGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetWebGroundingType">resetWebGroundingType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerPolicy` <a name="putCustomerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy"></a>

```typescript
public putCustomerPolicy(value: GoogleDiscoveryEngineAssistantCustomerPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

---

##### `putGenerationConfig` <a name="putGenerationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig"></a>

```typescript
public putGenerationConfig(value: GoogleDiscoveryEngineAssistantGenerationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineAssistantTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

---

##### `resetCustomerPolicy` <a name="resetCustomerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetCustomerPolicy"></a>

```typescript
public resetCustomerPolicy(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGenerationConfig` <a name="resetGenerationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetGenerationConfig"></a>

```typescript
public resetGenerationConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWebGroundingType` <a name="resetWebGroundingType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetWebGroundingType"></a>

```typescript
public resetWebGroundingType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineAssistant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineAssistant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineAssistant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicy">customerPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference">GoogleDiscoveryEngineAssistantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantIdInput">assistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicyInput">customerPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfigInput">generationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingTypeInput">webGroundingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantId">assistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingType">webGroundingType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customerPolicy`<sup>Required</sup> <a name="customerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicy"></a>

```typescript
public readonly customerPolicy: GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference</a>

---

##### `generationConfig`<sup>Required</sup> <a name="generationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfig"></a>

```typescript
public readonly generationConfig: GoogleDiscoveryEngineAssistantGenerationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineAssistantTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference">GoogleDiscoveryEngineAssistantTimeoutsOutputReference</a>

---

##### `assistantIdInput`<sup>Optional</sup> <a name="assistantIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantIdInput"></a>

```typescript
public readonly assistantIdInput: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `customerPolicyInput`<sup>Optional</sup> <a name="customerPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicyInput"></a>

```typescript
public readonly customerPolicyInput: GoogleDiscoveryEngineAssistantCustomerPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `generationConfigInput`<sup>Optional</sup> <a name="generationConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfigInput"></a>

```typescript
public readonly generationConfigInput: GoogleDiscoveryEngineAssistantGenerationConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineAssistantTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

---

##### `webGroundingTypeInput`<sup>Optional</sup> <a name="webGroundingTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingTypeInput"></a>

```typescript
public readonly webGroundingTypeInput: string;
```

- *Type:* string

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `webGroundingType`<sup>Required</sup> <a name="webGroundingType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingType"></a>

```typescript
public readonly webGroundingType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineAssistantConfig <a name="GoogleDiscoveryEngineAssistantConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAssistantConfig: googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.assistantId">assistantId</a></code> | <code>string</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.displayName">displayName</a></code> | <code>string</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.engineId">engineId</a></code> | <code>string</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.customerPolicy">customerPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.description">description</a></code> | <code>string</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.webGroundingType">webGroundingType</a></code> | <code>string</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#assistant_id GoogleDiscoveryEngineAssistant#assistant_id}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#collection_id GoogleDiscoveryEngineAssistant#collection_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#display_name GoogleDiscoveryEngineAssistant#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#engine_id GoogleDiscoveryEngineAssistant#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#location GoogleDiscoveryEngineAssistant#location}

---

##### `customerPolicy`<sup>Optional</sup> <a name="customerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.customerPolicy"></a>

```typescript
public readonly customerPolicy: GoogleDiscoveryEngineAssistantCustomerPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#customer_policy GoogleDiscoveryEngineAssistant#customer_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#deletion_policy GoogleDiscoveryEngineAssistant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#description GoogleDiscoveryEngineAssistant#description}

---

##### `generationConfig`<sup>Optional</sup> <a name="generationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.generationConfig"></a>

```typescript
public readonly generationConfig: GoogleDiscoveryEngineAssistantGenerationConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#generation_config GoogleDiscoveryEngineAssistant#generation_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineAssistantTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#timeouts GoogleDiscoveryEngineAssistant#timeouts}

---

##### `webGroundingType`<sup>Optional</sup> <a name="webGroundingType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.webGroundingType"></a>

```typescript
public readonly webGroundingType: string;
```

- *Type:* string

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#web_grounding_type GoogleDiscoveryEngineAssistant#web_grounding_type}

---

### GoogleDiscoveryEngineAssistantCustomerPolicy <a name="GoogleDiscoveryEngineAssistantCustomerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAssistantCustomerPolicy: googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases">bannedPhrases</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | banned_phrases block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig">modelArmorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | model_armor_config block. |

---

##### `bannedPhrases`<sup>Optional</sup> <a name="bannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases"></a>

```typescript
public readonly bannedPhrases: IResolvable | GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#banned_phrases GoogleDiscoveryEngineAssistant#banned_phrases}

---

##### `modelArmorConfig`<sup>Optional</sup> <a name="modelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig"></a>

```typescript
public readonly modelArmorConfig: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

model_armor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#model_armor_config GoogleDiscoveryEngineAssistant#model_armor_config}

---

### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAssistantCustomerPolicyBannedPhrases: googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase">phrase</a></code> | <code>string</code> | The raw string content to be banned. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics">ignoreDiacritics</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType">matchType</a></code> | <code>string</code> | Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'. |

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase"></a>

```typescript
public readonly phrase: string;
```

- *Type:* string

The raw string content to be banned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#phrase GoogleDiscoveryEngineAssistant#phrase}

---

##### `ignoreDiacritics`<sup>Optional</sup> <a name="ignoreDiacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics"></a>

```typescript
public readonly ignoreDiacritics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#ignore_diacritics GoogleDiscoveryEngineAssistant#ignore_diacritics}

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#match_type GoogleDiscoveryEngineAssistant#match_type}

---

### GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig <a name="GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig: googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate">userPromptTemplate</a></code> | <code>string</code> | The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode">failureMode</a></code> | <code>string</code> | Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'. |

---

##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the assistant
response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#response_template GoogleDiscoveryEngineAssistant#response_template}

---

##### `userPromptTemplate`<sup>Required</sup> <a name="userPromptTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate"></a>

```typescript
public readonly userPromptTemplate: string;
```

- *Type:* string

The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the user prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#user_prompt_template GoogleDiscoveryEngineAssistant#user_prompt_template}

---

##### `failureMode`<sup>Optional</sup> <a name="failureMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#failure_mode GoogleDiscoveryEngineAssistant#failure_mode}

---

### GoogleDiscoveryEngineAssistantGenerationConfig <a name="GoogleDiscoveryEngineAssistantGenerationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAssistantGenerationConfig: googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.defaultLanguage">defaultLanguage</a></code> | <code>string</code> | The default language to use for the generation of the assistant response. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.systemInstruction">systemInstruction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | system_instruction block. |

---

##### `defaultLanguage`<sup>Optional</sup> <a name="defaultLanguage" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.defaultLanguage"></a>

```typescript
public readonly defaultLanguage: string;
```

- *Type:* string

The default language to use for the generation of the assistant response.

Use an ISO 639-1 language code such as 'en'.
If not specified, the language will be automatically detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#default_language GoogleDiscoveryEngineAssistant#default_language}

---

##### `systemInstruction`<sup>Optional</sup> <a name="systemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

system_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#system_instruction GoogleDiscoveryEngineAssistant#system_instruction}

---

### GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction <a name="GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAssistantGenerationConfigSystemInstruction: googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction">additionalSystemInstruction</a></code> | <code>string</code> | Additional system instruction that will be added to the default system instruction. |

---

##### `additionalSystemInstruction`<sup>Optional</sup> <a name="additionalSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction"></a>

```typescript
public readonly additionalSystemInstruction: string;
```

- *Type:* string

Additional system instruction that will be added to the default system instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#additional_system_instruction GoogleDiscoveryEngineAssistant#additional_system_instruction}

---

### GoogleDiscoveryEngineAssistantTimeouts <a name="GoogleDiscoveryEngineAssistantTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAssistantTimeouts: googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#create GoogleDiscoveryEngineAssistant#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#delete GoogleDiscoveryEngineAssistant#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#update GoogleDiscoveryEngineAssistant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#create GoogleDiscoveryEngineAssistant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#delete GoogleDiscoveryEngineAssistant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_assistant#update GoogleDiscoveryEngineAssistant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---


### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics">resetIgnoreDiacritics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreDiacritics` <a name="resetIgnoreDiacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics"></a>

```typescript
public resetIgnoreDiacritics(): void
```

##### `resetMatchType` <a name="resetMatchType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType"></a>

```typescript
public resetMatchType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput">ignoreDiacriticsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput">phraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics">ignoreDiacritics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase">phrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreDiacriticsInput`<sup>Optional</sup> <a name="ignoreDiacriticsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput"></a>

```typescript
public readonly ignoreDiacriticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput"></a>

```typescript
public readonly matchTypeInput: string;
```

- *Type:* string

---

##### `phraseInput`<sup>Optional</sup> <a name="phraseInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput"></a>

```typescript
public readonly phraseInput: string;
```

- *Type:* string

---

##### `ignoreDiacritics`<sup>Required</sup> <a name="ignoreDiacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics"></a>

```typescript
public readonly ignoreDiacritics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase"></a>

```typescript
public readonly phrase: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>

---


### GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode">resetFailureMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureMode` <a name="resetFailureMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode"></a>

```typescript
public resetFailureMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput">failureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput">responseTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput">userPromptTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode">failureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate">userPromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureModeInput`<sup>Optional</sup> <a name="failureModeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput"></a>

```typescript
public readonly failureModeInput: string;
```

- *Type:* string

---

##### `responseTemplateInput`<sup>Optional</sup> <a name="responseTemplateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput"></a>

```typescript
public readonly responseTemplateInput: string;
```

- *Type:* string

---

##### `userPromptTemplateInput`<sup>Optional</sup> <a name="userPromptTemplateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput"></a>

```typescript
public readonly userPromptTemplateInput: string;
```

- *Type:* string

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

---

##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

---

##### `userPromptTemplate`<sup>Required</sup> <a name="userPromptTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate"></a>

```typescript
public readonly userPromptTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---


### GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases">putBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig">putModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases">resetBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig">resetModelArmorConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBannedPhrases` <a name="putBannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases"></a>

```typescript
public putBannedPhrases(value: IResolvable | GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---

##### `putModelArmorConfig` <a name="putModelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig"></a>

```typescript
public putModelArmorConfig(value: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `resetBannedPhrases` <a name="resetBannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases"></a>

```typescript
public resetBannedPhrases(): void
```

##### `resetModelArmorConfig` <a name="resetModelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig"></a>

```typescript
public resetModelArmorConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases">bannedPhrases</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig">modelArmorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput">bannedPhrasesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput">modelArmorConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bannedPhrases`<sup>Required</sup> <a name="bannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases"></a>

```typescript
public readonly bannedPhrases: GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a>

---

##### `modelArmorConfig`<sup>Required</sup> <a name="modelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig"></a>

```typescript
public readonly modelArmorConfig: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a>

---

##### `bannedPhrasesInput`<sup>Optional</sup> <a name="bannedPhrasesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput"></a>

```typescript
public readonly bannedPhrasesInput: IResolvable | GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---

##### `modelArmorConfigInput`<sup>Optional</sup> <a name="modelArmorConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput"></a>

```typescript
public readonly modelArmorConfigInput: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineAssistantCustomerPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

---


### GoogleDiscoveryEngineAssistantGenerationConfigOutputReference <a name="GoogleDiscoveryEngineAssistantGenerationConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction">putSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage">resetDefaultLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction">resetSystemInstruction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSystemInstruction` <a name="putSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction"></a>

```typescript
public putSystemInstruction(value: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `resetDefaultLanguage` <a name="resetDefaultLanguage" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage"></a>

```typescript
public resetDefaultLanguage(): void
```

##### `resetSystemInstruction` <a name="resetSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction"></a>

```typescript
public resetSystemInstruction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction">systemInstruction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput">defaultLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput">systemInstructionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage">defaultLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemInstruction`<sup>Required</sup> <a name="systemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a>

---

##### `defaultLanguageInput`<sup>Optional</sup> <a name="defaultLanguageInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput"></a>

```typescript
public readonly defaultLanguageInput: string;
```

- *Type:* string

---

##### `systemInstructionInput`<sup>Optional</sup> <a name="systemInstructionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput"></a>

```typescript
public readonly systemInstructionInput: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `defaultLanguage`<sup>Required</sup> <a name="defaultLanguage" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage"></a>

```typescript
public readonly defaultLanguage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineAssistantGenerationConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

---


### GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference <a name="GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction">resetAdditionalSystemInstruction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalSystemInstruction` <a name="resetAdditionalSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction"></a>

```typescript
public resetAdditionalSystemInstruction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput">additionalSystemInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction">additionalSystemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalSystemInstructionInput`<sup>Optional</sup> <a name="additionalSystemInstructionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput"></a>

```typescript
public readonly additionalSystemInstructionInput: string;
```

- *Type:* string

---

##### `additionalSystemInstruction`<sup>Required</sup> <a name="additionalSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction"></a>

```typescript
public readonly additionalSystemInstruction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---


### GoogleDiscoveryEngineAssistantTimeoutsOutputReference <a name="GoogleDiscoveryEngineAssistantTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAssistant } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineAssistantTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

---



