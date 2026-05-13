# `googleGkeHubRolloutSequence` Submodule <a name="`googleGkeHubRolloutSequence` Submodule" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubRolloutSequence <a name="GoogleGkeHubRolloutSequence" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

new googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence(scope: Construct, id: string, config: GoogleGkeHubRolloutSequenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig">GoogleGkeHubRolloutSequenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig">GoogleGkeHubRolloutSequenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig">putAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector">putIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig">resetAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector">resetIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoUpgradeConfig` <a name="putAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```typescript
public putAutoUpgradeConfig(value: GoogleGkeHubRolloutSequenceAutoUpgradeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `putIgnoredClustersSelector` <a name="putIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```typescript
public putIgnoredClustersSelector(value: GoogleGkeHubRolloutSequenceIgnoredClustersSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `putStages` <a name="putStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages"></a>

```typescript
public putStages(value: IResolvable | GoogleGkeHubRolloutSequenceStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeHubRolloutSequenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---

##### `resetAutoUpgradeConfig` <a name="resetAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```typescript
public resetAutoUpgradeConfig(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoredClustersSelector` <a name="resetIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```typescript
public resetIgnoredClustersSelector(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeHubRolloutSequence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput">autoUpgradeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput">ignoredClustersSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput">rolloutSequenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput">stagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId">rolloutSequenceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoUpgradeConfig`<sup>Required</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```typescript
public readonly autoUpgradeConfig: GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `ignoredClustersSelector`<sup>Required</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```typescript
public readonly ignoredClustersSelector: GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages"></a>

```typescript
public readonly stages: GoogleGkeHubRolloutSequenceStagesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubRolloutSequenceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `autoUpgradeConfigInput`<sup>Optional</sup> <a name="autoUpgradeConfigInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```typescript
public readonly autoUpgradeConfigInput: GoogleGkeHubRolloutSequenceAutoUpgradeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoredClustersSelectorInput`<sup>Optional</sup> <a name="ignoredClustersSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```typescript
public readonly ignoredClustersSelectorInput: GoogleGkeHubRolloutSequenceIgnoredClustersSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rolloutSequenceIdInput`<sup>Optional</sup> <a name="rolloutSequenceIdInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```typescript
public readonly rolloutSequenceIdInput: string;
```

- *Type:* string

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput"></a>

```typescript
public readonly stagesInput: IResolvable | GoogleGkeHubRolloutSequenceStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeHubRolloutSequenceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId"></a>

```typescript
public readonly rolloutSequenceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfig <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

const googleGkeHubRolloutSequenceAutoUpgradeConfig: googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">rolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `rolloutCreationScope`<sup>Optional</sup> <a name="rolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```typescript
public readonly rolloutCreationScope: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#rollout_creation_scope GoogleGkeHubRolloutSequence#rollout_creation_scope}

---

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

const googleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope: googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">upgradeTypes</a></code> | <code>string[]</code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `upgradeTypes`<sup>Optional</sup> <a name="upgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```typescript
public readonly upgradeTypes: string[];
```

- *Type:* string[]

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#upgrade_types GoogleGkeHubRolloutSequence#upgrade_types}

---

### GoogleGkeHubRolloutSequenceConfig <a name="GoogleGkeHubRolloutSequenceConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

const googleGkeHubRolloutSequenceConfig: googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId">rolloutSequenceId</a></code> | <code>string</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages">stages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]</code> | stages block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName">displayName</a></code> | <code>string</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```typescript
public readonly rolloutSequenceId: string;
```

- *Type:* string

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#rollout_sequence_id GoogleGkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages"></a>

```typescript
public readonly stages: IResolvable | GoogleGkeHubRolloutSequenceStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#stages GoogleGkeHubRolloutSequence#stages}

---

##### `autoUpgradeConfig`<sup>Optional</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```typescript
public readonly autoUpgradeConfig: GoogleGkeHubRolloutSequenceAutoUpgradeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#auto_upgrade_config GoogleGkeHubRolloutSequence#auto_upgrade_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#display_name GoogleGkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoredClustersSelector`<sup>Optional</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```typescript
public readonly ignoredClustersSelector: GoogleGkeHubRolloutSequenceIgnoredClustersSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#ignored_clusters_selector GoogleGkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#labels GoogleGkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubRolloutSequenceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#timeouts GoogleGkeHubRolloutSequence#timeouts}

---

### GoogleGkeHubRolloutSequenceIgnoredClustersSelector <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

const googleGkeHubRolloutSequenceIgnoredClustersSelector: googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">labelSelector</a></code> | <code>string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceStages <a name="GoogleGkeHubRolloutSequenceStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

const googleGkeHubRolloutSequenceStages: googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects">fleetProjects</a></code> | <code>string[]</code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector">clusterSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration">soakDuration</a></code> | <code>string</code> | Soak time after upgrading all the clusters in the stage, specified in seconds. |

---

##### `fleetProjects`<sup>Required</sup> <a name="fleetProjects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects"></a>

```typescript
public readonly fleetProjects: string[];
```

- *Type:* string[]

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#fleet_projects GoogleGkeHubRolloutSequence#fleet_projects}

---

##### `clusterSelector`<sup>Optional</sup> <a name="clusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector"></a>

```typescript
public readonly clusterSelector: GoogleGkeHubRolloutSequenceStagesClusterSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#cluster_selector GoogleGkeHubRolloutSequence#cluster_selector}

---

##### `soakDuration`<sup>Optional</sup> <a name="soakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration"></a>

```typescript
public readonly soakDuration: string;
```

- *Type:* string

Soak time after upgrading all the clusters in the stage, specified in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#soak_duration GoogleGkeHubRolloutSequence#soak_duration}

---

### GoogleGkeHubRolloutSequenceStagesClusterSelector <a name="GoogleGkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

const googleGkeHubRolloutSequenceStagesClusterSelector: googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">labelSelector</a></code> | <code>string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceTimeouts <a name="GoogleGkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

const googleGkeHubRolloutSequenceTimeouts: googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

new googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope">putRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope">resetRolloutCreationScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRolloutCreationScope` <a name="putRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```typescript
public putRolloutCreationScope(value: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `resetRolloutCreationScope` <a name="resetRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```typescript
public resetRolloutCreationScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">rolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">rolloutCreationScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rolloutCreationScope`<sup>Required</sup> <a name="rolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```typescript
public readonly rolloutCreationScope: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `rolloutCreationScopeInput`<sup>Optional</sup> <a name="rolloutCreationScopeInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```typescript
public readonly rolloutCreationScopeInput: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubRolloutSequenceAutoUpgradeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

new googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes">resetUpgradeTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpgradeTypes` <a name="resetUpgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```typescript
public resetUpgradeTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">upgradeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">upgradeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `upgradeTypesInput`<sup>Optional</sup> <a name="upgradeTypesInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```typescript
public readonly upgradeTypesInput: string[];
```

- *Type:* string[]

---

##### `upgradeTypes`<sup>Required</sup> <a name="upgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```typescript
public readonly upgradeTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

new googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">labelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```typescript
public readonly labelSelectorInput: string;
```

- *Type:* string

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubRolloutSequenceIgnoredClustersSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

new googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">labelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```typescript
public readonly labelSelectorInput: string;
```

- *Type:* string

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubRolloutSequenceStagesClusterSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesList <a name="GoogleGkeHubRolloutSequenceStagesList" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

new googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get"></a>

```typescript
public get(index: number): GoogleGkeHubRolloutSequenceStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubRolloutSequenceStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]

---


### GoogleGkeHubRolloutSequenceStagesOutputReference <a name="GoogleGkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

new googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector">putClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector">resetClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration">resetSoakDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterSelector` <a name="putClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```typescript
public putClusterSelector(value: GoogleGkeHubRolloutSequenceStagesClusterSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `resetClusterSelector` <a name="resetClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```typescript
public resetClusterSelector(): void
```

##### `resetSoakDuration` <a name="resetSoakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```typescript
public resetSoakDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">clusterSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">clusterSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">fleetProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">soakDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">fleetProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration">soakDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterSelector`<sup>Required</sup> <a name="clusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```typescript
public readonly clusterSelector: GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `clusterSelectorInput`<sup>Optional</sup> <a name="clusterSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```typescript
public readonly clusterSelectorInput: GoogleGkeHubRolloutSequenceStagesClusterSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `fleetProjectsInput`<sup>Optional</sup> <a name="fleetProjectsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```typescript
public readonly fleetProjectsInput: string[];
```

- *Type:* string[]

---

##### `soakDurationInput`<sup>Optional</sup> <a name="soakDurationInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```typescript
public readonly soakDurationInput: string;
```

- *Type:* string

---

##### `fleetProjects`<sup>Required</sup> <a name="fleetProjects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```typescript
public readonly fleetProjects: string[];
```

- *Type:* string[]

---

##### `soakDuration`<sup>Required</sup> <a name="soakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```typescript
public readonly soakDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubRolloutSequenceStages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>

---


### GoogleGkeHubRolloutSequenceTimeoutsOutputReference <a name="GoogleGkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeHubRolloutSequence } from '@cdktn/provider-google-beta'

new googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubRolloutSequenceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---



