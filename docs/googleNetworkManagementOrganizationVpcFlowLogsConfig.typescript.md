# `googleNetworkManagementOrganizationVpcFlowLogsConfig` Submodule <a name="`googleNetworkManagementOrganizationVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfig <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfig" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer"></a>

```typescript
import { googleNetworkManagementOrganizationVpcFlowLogsConfig } from '@cdktn/provider-google-beta'

new googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig(scope: Construct, id: string, config: GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig">GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig">GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata">resetCrossProjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval"></a>

```typescript
public resetAggregationInterval(): void
```

##### `resetCrossProjectMetadata` <a name="resetCrossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata"></a>

```typescript
public resetCrossProjectMetadata(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr"></a>

```typescript
public resetFilterExpr(): void
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling"></a>

```typescript
public resetFlowSampling(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields"></a>

```typescript
public resetMetadataFields(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct"></a>

```typescript
import { googleNetworkManagementOrganizationVpcFlowLogsConfig } from '@cdktn/provider-google-beta'

googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement"></a>

```typescript
import { googleNetworkManagementOrganizationVpcFlowLogsConfig } from '@cdktn/provider-google-beta'

googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource"></a>

```typescript
import { googleNetworkManagementOrganizationVpcFlowLogsConfig } from '@cdktn/provider-google-beta'

googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport"></a>

```typescript
import { googleNetworkManagementOrganizationVpcFlowLogsConfig } from '@cdktn/provider-google-beta'

googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkManagementOrganizationVpcFlowLogsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkManagementOrganizationVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementOrganizationVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput">crossProjectMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput">filterExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput">flowSamplingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">vpcFlowLogsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata">crossProjectMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr">filterExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling">flowSampling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```typescript
public readonly aggregationIntervalInput: string;
```

- *Type:* string

---

##### `crossProjectMetadataInput`<sup>Optional</sup> <a name="crossProjectMetadataInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput"></a>

```typescript
public readonly crossProjectMetadataInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput"></a>

```typescript
public readonly filterExprInput: string;
```

- *Type:* string

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput"></a>

```typescript
public readonly flowSamplingInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```typescript
public readonly metadataFieldsInput: string[];
```

- *Type:* string[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `vpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="vpcFlowLogsConfigIdInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```typescript
public readonly vpcFlowLogsConfigIdInput: string;
```

- *Type:* string

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval"></a>

```typescript
public readonly aggregationInterval: string;
```

- *Type:* string

---

##### `crossProjectMetadata`<sup>Required</sup> <a name="crossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata"></a>

```typescript
public readonly crossProjectMetadata: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr"></a>

```typescript
public readonly filterExpr: string;
```

- *Type:* string

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling"></a>

```typescript
public readonly flowSampling: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```typescript
public readonly vpcFlowLogsConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.Initializer"></a>

```typescript
import { googleNetworkManagementOrganizationVpcFlowLogsConfig } from '@cdktn/provider-google-beta'

const googleNetworkManagementOrganizationVpcFlowLogsConfigConfig: googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization">organization</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>string</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata">crossProjectMetadata</a></code> | <code>string</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description">description</a></code> | <code>string</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr">filterExpr</a></code> | <code>string</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling">flowSampling</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata">metadata</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state">state</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#location GoogleNetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#organization GoogleNetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```typescript
public readonly vpcFlowLogsConfigId: string;
```

- *Type:* string

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```typescript
public readonly aggregationInterval: string;
```

- *Type:* string

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#aggregation_interval GoogleNetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `crossProjectMetadata`<sup>Optional</sup> <a name="crossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata"></a>

```typescript
public readonly crossProjectMetadata: string;
```

- *Type:* string

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#cross_project_metadata GoogleNetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#deletion_policy GoogleNetworkManagementOrganizationVpcFlowLogsConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#description GoogleNetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr"></a>

```typescript
public readonly filterExpr: string;
```

- *Type:* string

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#filter_expr GoogleNetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling"></a>

```typescript
public readonly flowSampling: number;
```

- *Type:* number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#flow_sampling GoogleNetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#labels GoogleNetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
  Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#metadata GoogleNetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if \"metadata\" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#metadata_fields GoogleNetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#state GoogleNetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#timeouts GoogleNetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.Initializer"></a>

```typescript
import { googleNetworkManagementOrganizationVpcFlowLogsConfig } from '@cdktn/provider-google-beta'

const googleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts: googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#create GoogleNetworkManagementOrganizationVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#delete GoogleNetworkManagementOrganizationVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#update GoogleNetworkManagementOrganizationVpcFlowLogsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#create GoogleNetworkManagementOrganizationVpcFlowLogsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#delete GoogleNetworkManagementOrganizationVpcFlowLogsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#update GoogleNetworkManagementOrganizationVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkManagementOrganizationVpcFlowLogsConfig } from '@cdktn/provider-google-beta'

new googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---



