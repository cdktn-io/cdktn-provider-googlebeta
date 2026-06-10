# `googleNetworkServicesMulticastGroupRange` Submodule <a name="`googleNetworkServicesMulticastGroupRange` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastGroupRange <a name="GoogleNetworkServicesMulticastGroupRange" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range google_network_services_multicast_group_range}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange(scope: Construct, id: string, config: GoogleNetworkServicesMulticastGroupRangeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig">GoogleNetworkServicesMulticastGroupRangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig">GoogleNetworkServicesMulticastGroupRangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetConsumerAcceptList">resetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetDistributionScope">resetDistributionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetRequireExplicitAccept">resetRequireExplicitAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.putLogConfig"></a>

```typescript
public putLogConfig(value: GoogleNetworkServicesMulticastGroupRangeLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig">GoogleNetworkServicesMulticastGroupRangeLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesMulticastGroupRangeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts">GoogleNetworkServicesMulticastGroupRangeTimeouts</a>

---

##### `resetConsumerAcceptList` <a name="resetConsumerAcceptList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetConsumerAcceptList"></a>

```typescript
public resetConsumerAcceptList(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDistributionScope` <a name="resetDistributionScope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetDistributionScope"></a>

```typescript
public resetDistributionScope(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequireExplicitAccept` <a name="resetRequireExplicitAccept" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetRequireExplicitAccept"></a>

```typescript
public resetRequireExplicitAccept(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isConstruct"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isTerraformElement"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isTerraformResource"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastGroupRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastGroupRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastGroupRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference">GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList">GoogleNetworkServicesMulticastGroupRangeStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.consumerAcceptListInput">consumerAcceptListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.distributionScopeInput">distributionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig">GoogleNetworkServicesMulticastGroupRangeLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.multicastDomainInput">multicastDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.multicastGroupRangeIdInput">multicastGroupRangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.requireExplicitAcceptInput">requireExplicitAcceptInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.reservedInternalRangeInput">reservedInternalRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts">GoogleNetworkServicesMulticastGroupRangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.consumerAcceptList">consumerAcceptList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.distributionScope">distributionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.multicastDomain">multicastDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.multicastGroupRangeId">multicastGroupRangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.requireExplicitAccept">requireExplicitAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.reservedInternalRange">reservedInternalRange</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference">GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.state"></a>

```typescript
public readonly state: GoogleNetworkServicesMulticastGroupRangeStateList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList">GoogleNetworkServicesMulticastGroupRangeStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `consumerAcceptListInput`<sup>Optional</sup> <a name="consumerAcceptListInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.consumerAcceptListInput"></a>

```typescript
public readonly consumerAcceptListInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `distributionScopeInput`<sup>Optional</sup> <a name="distributionScopeInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.distributionScopeInput"></a>

```typescript
public readonly distributionScopeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: GoogleNetworkServicesMulticastGroupRangeLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig">GoogleNetworkServicesMulticastGroupRangeLogConfig</a>

---

##### `multicastDomainInput`<sup>Optional</sup> <a name="multicastDomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.multicastDomainInput"></a>

```typescript
public readonly multicastDomainInput: string;
```

- *Type:* string

---

##### `multicastGroupRangeIdInput`<sup>Optional</sup> <a name="multicastGroupRangeIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.multicastGroupRangeIdInput"></a>

```typescript
public readonly multicastGroupRangeIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requireExplicitAcceptInput`<sup>Optional</sup> <a name="requireExplicitAcceptInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.requireExplicitAcceptInput"></a>

```typescript
public readonly requireExplicitAcceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reservedInternalRangeInput`<sup>Optional</sup> <a name="reservedInternalRangeInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.reservedInternalRangeInput"></a>

```typescript
public readonly reservedInternalRangeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesMulticastGroupRangeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts">GoogleNetworkServicesMulticastGroupRangeTimeouts</a>

---

##### `consumerAcceptList`<sup>Required</sup> <a name="consumerAcceptList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributionScope`<sup>Required</sup> <a name="distributionScope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.distributionScope"></a>

```typescript
public readonly distributionScope: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.multicastDomain"></a>

```typescript
public readonly multicastDomain: string;
```

- *Type:* string

---

##### `multicastGroupRangeId`<sup>Required</sup> <a name="multicastGroupRangeId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.multicastGroupRangeId"></a>

```typescript
public readonly multicastGroupRangeId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `requireExplicitAccept`<sup>Required</sup> <a name="requireExplicitAccept" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.requireExplicitAccept"></a>

```typescript
public readonly requireExplicitAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.reservedInternalRange"></a>

```typescript
public readonly reservedInternalRange: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRange.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastGroupRangeConfig <a name="GoogleNetworkServicesMulticastGroupRangeConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupRangeConfig: googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.multicastDomain">multicastDomain</a></code> | <code>string</code> | The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.multicastGroupRangeId">multicastGroupRangeId</a></code> | <code>string</code> | A unique name for the multicast group range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.reservedInternalRange">reservedInternalRange</a></code> | <code>string</code> | The resource name of the internal range reserved for this multicast group range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.consumerAcceptList">consumerAcceptList</a></code> | <code>string[]</code> | A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.description">description</a></code> | <code>string</code> | An optional text description of the multicast group range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.distributionScope">distributionScope</a></code> | <code>string</code> | Multicast group range's distribution scope. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#id GoogleNetworkServicesMulticastGroupRange#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig">GoogleNetworkServicesMulticastGroupRangeLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#project GoogleNetworkServicesMulticastGroupRange#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.requireExplicitAccept">requireExplicitAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether an empty consumer_accept_list will deny all consumer projects. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts">GoogleNetworkServicesMulticastGroupRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#location GoogleNetworkServicesMulticastGroupRange#location}

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.multicastDomain"></a>

```typescript
public readonly multicastDomain: string;
```

- *Type:* string

The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#multicast_domain GoogleNetworkServicesMulticastGroupRange#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastGroupRangeId`<sup>Required</sup> <a name="multicastGroupRangeId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.multicastGroupRangeId"></a>

```typescript
public readonly multicastGroupRangeId: string;
```

- *Type:* string

A unique name for the multicast group range.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#multicast_group_range_id GoogleNetworkServicesMulticastGroupRange#multicast_group_range_id}

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.reservedInternalRange"></a>

```typescript
public readonly reservedInternalRange: string;
```

- *Type:* string

The resource name of the internal range reserved for this multicast group range.

The internal range must be a Class D address (224.0.0.0 to 239.255.255.255)
and have a prefix length >= 23.

Use the following format:
'projects/* /locations/global/internalRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#reserved_internal_range GoogleNetworkServicesMulticastGroupRange#reserved_internal_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: string[];
```

- *Type:* string[]

A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange.

The
project can be specified using its project ID or project number. If left
empty, then all consumer projects are allowed (unless
require_explicit_accept is set to true) once they have VPC networks
associated to the multicast domain. The current max length of the accept
list is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#consumer_accept_list GoogleNetworkServicesMulticastGroupRange#consumer_accept_list}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#deletion_policy GoogleNetworkServicesMulticastGroupRange#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional text description of the multicast group range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#description GoogleNetworkServicesMulticastGroupRange#description}

---

##### `distributionScope`<sup>Optional</sup> <a name="distributionScope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.distributionScope"></a>

```typescript
public readonly distributionScope: string;
```

- *Type:* string

Multicast group range's distribution scope.

Intra-zone or intra-region
cross-zone is supported, with default value being intra-region. Cross
region distribution is not supported.
Possible values:
INTRA_ZONE
INTRA_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#distribution_scope GoogleNetworkServicesMulticastGroupRange#distribution_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#id GoogleNetworkServicesMulticastGroupRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#labels GoogleNetworkServicesMulticastGroupRange#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleNetworkServicesMulticastGroupRangeLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig">GoogleNetworkServicesMulticastGroupRangeLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#log_config GoogleNetworkServicesMulticastGroupRange#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#project GoogleNetworkServicesMulticastGroupRange#project}.

---

##### `requireExplicitAccept`<sup>Optional</sup> <a name="requireExplicitAccept" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.requireExplicitAccept"></a>

```typescript
public readonly requireExplicitAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether an empty consumer_accept_list will deny all consumer projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#require_explicit_accept GoogleNetworkServicesMulticastGroupRange#require_explicit_accept}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastGroupRangeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts">GoogleNetworkServicesMulticastGroupRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#timeouts GoogleNetworkServicesMulticastGroupRange#timeouts}

---

### GoogleNetworkServicesMulticastGroupRangeLogConfig <a name="GoogleNetworkServicesMulticastGroupRangeLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupRangeLogConfig: googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#enabled GoogleNetworkServicesMulticastGroupRange#enabled}

---

### GoogleNetworkServicesMulticastGroupRangeState <a name="GoogleNetworkServicesMulticastGroupRangeState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeState.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupRangeState: googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeState = { ... }
```


### GoogleNetworkServicesMulticastGroupRangeTimeouts <a name="GoogleNetworkServicesMulticastGroupRangeTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupRangeTimeouts: googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#create GoogleNetworkServicesMulticastGroupRange#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#delete GoogleNetworkServicesMulticastGroupRange#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#update GoogleNetworkServicesMulticastGroupRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#create GoogleNetworkServicesMulticastGroupRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#delete GoogleNetworkServicesMulticastGroupRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_group_range#update GoogleNetworkServicesMulticastGroupRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference <a name="GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig">GoogleNetworkServicesMulticastGroupRangeLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesMulticastGroupRangeLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeLogConfig">GoogleNetworkServicesMulticastGroupRangeLogConfig</a>

---


### GoogleNetworkServicesMulticastGroupRangeStateList <a name="GoogleNetworkServicesMulticastGroupRangeStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesMulticastGroupRangeStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkServicesMulticastGroupRangeStateOutputReference <a name="GoogleNetworkServicesMulticastGroupRangeStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeState">GoogleNetworkServicesMulticastGroupRangeState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesMulticastGroupRangeState;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeState">GoogleNetworkServicesMulticastGroupRangeState</a>

---


### GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRange } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts">GoogleNetworkServicesMulticastGroupRangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesMulticastGroupRangeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRange.GoogleNetworkServicesMulticastGroupRangeTimeouts">GoogleNetworkServicesMulticastGroupRangeTimeouts</a>

---



