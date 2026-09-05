# `googleComputeRegionNetworkPolicyTrafficClassificationRule` Submodule <a name="`googleComputeRegionNetworkPolicyTrafficClassificationRule` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRule <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule google_compute_region_network_policy_traffic_classification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule(scope: Construct, id: string, config: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags">putTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetSecureTags">resetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction"></a>

```typescript
public putAction(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch"></a>

```typescript
public putMatch(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---

##### `putTargetSecureTags` <a name="putTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags"></a>

```typescript
public putTargetSecureTags(value: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetTargetSecureTags` <a name="resetTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetSecureTags"></a>

```typescript
public resetTargetSecureTags(): void
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetServiceAccounts"></a>

```typescript
public resetTargetServiceAccounts(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionNetworkPolicyTrafficClassificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleTupleCount">ruleTupleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTags">targetSecureTags</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.actionInput">actionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicyInput">networkPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTagsInput">targetSecureTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicy">networkPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.action"></a>

```typescript
public readonly action: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.match"></a>

```typescript
public readonly match: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleTupleCount"></a>

```typescript
public readonly ruleTupleCount: number;
```

- *Type:* number

---

##### `targetSecureTags`<sup>Required</sup> <a name="targetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTags"></a>

```typescript
public readonly targetSecureTags: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.actionInput"></a>

```typescript
public readonly actionInput: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.matchInput"></a>

```typescript
public readonly matchInput: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicyInput"></a>

```typescript
public readonly networkPolicyInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `targetSecureTagsInput`<sup>Optional</sup> <a name="targetSecureTagsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTagsInput"></a>

```typescript
public readonly targetSecureTagsInput: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>[]

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccountsInput"></a>

```typescript
public readonly targetServiceAccountsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

const googleComputeRegionNetworkPolicyTrafficClassificationRuleAction: googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpMode">dscpMode</a></code> | <code>string</code> | DSCP mode. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpValue">dscpValue</a></code> | <code>number</code> | Custom DSCP value from 0-63 range. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.trafficClass">trafficClass</a></code> | <code>string</code> | The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.type">type</a></code> | <code>string</code> | Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"]. |

---

##### `dscpMode`<sup>Optional</sup> <a name="dscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpMode"></a>

```typescript
public readonly dscpMode: string;
```

- *Type:* string

DSCP mode.

When set to AUTO, the DSCP value will be picked automatically based on selected trafficClass. Otherwise,dscpValue needs to be explicitly specified. Possible values: ["AUTO", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_mode GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_mode}

---

##### `dscpValue`<sup>Optional</sup> <a name="dscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpValue"></a>

```typescript
public readonly dscpValue: number;
```

- *Type:* number

Custom DSCP value from 0-63 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_value GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_value}

---

##### `trafficClass`<sup>Optional</sup> <a name="trafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.trafficClass"></a>

```typescript
public readonly trafficClass: string;
```

- *Type:* string

The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#traffic_class GoogleComputeRegionNetworkPolicyTrafficClassificationRule#traffic_class}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#type GoogleComputeRegionNetworkPolicyTrafficClassificationRule#type}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

const googleComputeRegionNetworkPolicyTrafficClassificationRuleConfig: googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.networkPolicy">networkPolicy</a></code> | <code>string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.description">description</a></code> | <code>string</code> | An optional description for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Denotes whether the network policy rule is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.region">region</a></code> | <code>string</code> | The location of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetSecureTags">targetSecureTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>[]</code> | target_secure_tags block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.match"></a>

```typescript
public readonly match: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#match GoogleComputeRegionNetworkPolicyTrafficClassificationRule#match}

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: string;
```

- *Type:* string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#network_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#network_policy}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 1 and 2147482647.
The priority values from 2147482648 to 2147483647 (1000) are reserved for system default network policy rules.
Rules are evaluated from highest to lowest priority where 1 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#priority GoogleComputeRegionNetworkPolicyTrafficClassificationRule#priority}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.action"></a>

```typescript
public readonly action: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#action GoogleComputeRegionNetworkPolicyTrafficClassificationRule#action}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#deletion_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#description GoogleComputeRegionNetworkPolicyTrafficClassificationRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Denotes whether the network policy rule is disabled.

When set to true, the network policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the network policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#disabled GoogleComputeRegionNetworkPolicyTrafficClassificationRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#region GoogleComputeRegionNetworkPolicyTrafficClassificationRule#region}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#rule_name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#rule_name}

---

##### `targetSecureTags`<sup>Optional</sup> <a name="targetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetSecureTags"></a>

```typescript
public readonly targetSecureTags: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>[]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_secure_tags GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_secure_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_service_accounts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#timeouts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#timeouts}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

const googleComputeRegionNetworkPolicyTrafficClassificationRuleMatch: googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.layer4Configs">layer4Configs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>[]</code> | layer4_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.layer4Configs"></a>

```typescript
public readonly layer4Configs: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>[]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#layer4_configs GoogleComputeRegionNetworkPolicyTrafficClassificationRule#layer4_configs}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dest_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dest_ip_ranges}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#src_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#src_ip_ranges}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

const googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs: googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is required when creating a traffic classification rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ip_protocol GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ports GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ports}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

const googleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags: googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.property.name">name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#name}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

const googleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts: googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpMode">resetDscpMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpValue">resetDscpValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetTrafficClass">resetTrafficClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDscpMode` <a name="resetDscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpMode"></a>

```typescript
public resetDscpMode(): void
```

##### `resetDscpValue` <a name="resetDscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpValue"></a>

```typescript
public resetDscpValue(): void
```

##### `resetTrafficClass` <a name="resetTrafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetTrafficClass"></a>

```typescript
public resetTrafficClass(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpModeInput">dscpModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValueInput">dscpValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClassInput">trafficClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpMode">dscpMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValue">dscpValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClass">trafficClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dscpModeInput`<sup>Optional</sup> <a name="dscpModeInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpModeInput"></a>

```typescript
public readonly dscpModeInput: string;
```

- *Type:* string

---

##### `dscpValueInput`<sup>Optional</sup> <a name="dscpValueInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValueInput"></a>

```typescript
public readonly dscpValueInput: number;
```

- *Type:* number

---

##### `trafficClassInput`<sup>Optional</sup> <a name="trafficClassInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClassInput"></a>

```typescript
public readonly trafficClassInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `dscpMode`<sup>Required</sup> <a name="dscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpMode"></a>

```typescript
public readonly dscpMode: string;
```

- *Type:* string

---

##### `dscpValue`<sup>Required</sup> <a name="dscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValue"></a>

```typescript
public readonly dscpValue: number;
```

- *Type:* number

---

##### `trafficClass`<sup>Required</sup> <a name="trafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClass"></a>

```typescript
public readonly trafficClass: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>[]

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs">putLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Configs` <a name="putLayer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs"></a>

```typescript
public putLayer4Configs(value: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>[]

---

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetDestIpRanges"></a>

```typescript
public resetDestIpRanges(): void
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4Configs">layer4Configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4ConfigsInput">layer4ConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4Configs"></a>

```typescript
public readonly layer4Configs: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList</a>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRangesInput"></a>

```typescript
public readonly destIpRangesInput: string[];
```

- *Type:* string[]

---

##### `layer4ConfigsInput`<sup>Optional</sup> <a name="layer4ConfigsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```typescript
public readonly layer4ConfigsInput: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>[]

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>[]

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkPolicyTrafficClassificationRule } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---



