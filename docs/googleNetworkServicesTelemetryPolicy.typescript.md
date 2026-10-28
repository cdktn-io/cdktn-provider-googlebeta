# `googleNetworkServicesTelemetryPolicy` Submodule <a name="`googleNetworkServicesTelemetryPolicy` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesTelemetryPolicy <a name="GoogleNetworkServicesTelemetryPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy google_network_services_telemetry_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

new googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy(scope: Construct, id: string, config: GoogleNetworkServicesTelemetryPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig">GoogleNetworkServicesTelemetryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig">GoogleNetworkServicesTelemetryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration">putMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget">putTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration">putTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration">resetMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration">resetTracingConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricsConfiguration` <a name="putMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration"></a>

```typescript
public putMetricsConfiguration(value: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `putTelemetryTarget` <a name="putTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget"></a>

```typescript
public putTelemetryTarget(value: GoogleNetworkServicesTelemetryPolicyTelemetryTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesTelemetryPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---

##### `putTracingConfiguration` <a name="putTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration"></a>

```typescript
public putTracingConfiguration(value: GoogleNetworkServicesTelemetryPolicyTracingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMetricsConfiguration` <a name="resetMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration"></a>

```typescript
public resetMetricsConfiguration(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTracingConfiguration` <a name="resetTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration"></a>

```typescript
public resetTracingConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesTelemetryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesTelemetryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesTelemetryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget">telemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput">metricsConfigurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput">telemetryTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput">tracingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `metricsConfiguration`<sup>Required</sup> <a name="metricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration"></a>

```typescript
public readonly metricsConfiguration: GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a>

---

##### `telemetryTarget`<sup>Required</sup> <a name="telemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget"></a>

```typescript
public readonly telemetryTarget: GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a>

---

##### `tracingConfiguration`<sup>Required</sup> <a name="tracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration"></a>

```typescript
public readonly tracingConfiguration: GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metricsConfigurationInput`<sup>Optional</sup> <a name="metricsConfigurationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput"></a>

```typescript
public readonly metricsConfigurationInput: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `telemetryTargetInput`<sup>Optional</sup> <a name="telemetryTargetInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput"></a>

```typescript
public readonly telemetryTargetInput: GoogleNetworkServicesTelemetryPolicyTelemetryTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesTelemetryPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---

##### `tracingConfigurationInput`<sup>Optional</sup> <a name="tracingConfigurationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput"></a>

```typescript
public readonly tracingConfigurationInput: GoogleNetworkServicesTelemetryPolicyTracingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesTelemetryPolicyConfig <a name="GoogleNetworkServicesTelemetryPolicyConfig" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

const googleNetworkServicesTelemetryPolicyConfig: googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name">name</a></code> | <code>string</code> | Short name of the TelemetryPolicy resource to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget">telemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | telemetry_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | Provides a human-readable name for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the TelemetryPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location">location</a></code> | <code>string</code> | Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | metrics_configuration block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | tracing_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Short name of the TelemetryPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#name GoogleNetworkServicesTelemetryPolicy#name}

---

##### `telemetryTarget`<sup>Required</sup> <a name="telemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget"></a>

```typescript
public readonly telemetryTarget: GoogleNetworkServicesTelemetryPolicyTelemetryTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

telemetry_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#telemetry_target GoogleNetworkServicesTelemetryPolicy#telemetry_target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#deletion_policy GoogleNetworkServicesTelemetryPolicy#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Provides a human-readable name for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#display_name GoogleNetworkServicesTelemetryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the TelemetryPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#labels GoogleNetworkServicesTelemetryPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#location GoogleNetworkServicesTelemetryPolicy#location}

---

##### `metricsConfiguration`<sup>Optional</sup> <a name="metricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration"></a>

```typescript
public readonly metricsConfiguration: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

metrics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#metrics_configuration GoogleNetworkServicesTelemetryPolicy#metrics_configuration}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesTelemetryPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#timeouts GoogleNetworkServicesTelemetryPolicy#timeouts}

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration"></a>

```typescript
public readonly tracingConfiguration: GoogleNetworkServicesTelemetryPolicyTracingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#tracing_configuration GoogleNetworkServicesTelemetryPolicy#tracing_configuration}

---

### GoogleNetworkServicesTelemetryPolicyMetricsConfiguration <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

const googleNetworkServicesTelemetryPolicyMetricsConfiguration: googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

### GoogleNetworkServicesTelemetryPolicyTelemetryTarget <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

const googleNetworkServicesTelemetryPolicyTelemetryTarget: googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources">resources</a></code> | <code>string[]</code> | Lists references to the resources that are targeted by the policy. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Lists references to the resources that are targeted by the policy.

Types of resources supported:
- 'run.googleapis.com/'
- 'compute.googleapis.com/'
- 'networkservices.googleapis.com/'
The format must be the full resource name of a supported resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#resources GoogleNetworkServicesTelemetryPolicy#resources}

---

### GoogleNetworkServicesTelemetryPolicyTimeouts <a name="GoogleNetworkServicesTelemetryPolicyTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

const googleNetworkServicesTelemetryPolicyTimeouts: googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}.

---

### GoogleNetworkServicesTelemetryPolicyTracingConfiguration <a name="GoogleNetworkServicesTelemetryPolicyTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

const googleNetworkServicesTelemetryPolicyTracingConfiguration: googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes">customSpanAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]</code> | custom_span_attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling">parentBasedSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | parent_based_sampling block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate">samplingRate</a></code> | <code>number</code> | Specifies the tracing sampling rate. |

---

##### `customSpanAttributes`<sup>Optional</sup> <a name="customSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes"></a>

```typescript
public readonly customSpanAttributes: IResolvable | GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]

custom_span_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#custom_span_attributes GoogleNetworkServicesTelemetryPolicy#custom_span_attributes}

---

##### `parentBasedSampling`<sup>Optional</sup> <a name="parentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling"></a>

```typescript
public readonly parentBasedSampling: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

parent_based_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#parent_based_sampling GoogleNetworkServicesTelemetryPolicy#parent_based_sampling}

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

Specifies the tracing sampling rate.

The sampling rate is a float number in the interval [0, 1]. The sampling rate is applied to all requests to the targeted resources. The default value is 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

const googleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes: googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName">attributeName</a></code> | <code>string</code> | Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue">fromHeaderValue</a></code> | <code>string</code> | Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue">literalValue</a></code> | <code>string</code> | Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName. |

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#attribute_name GoogleNetworkServicesTelemetryPolicy#attribute_name}

---

##### `fromHeaderValue`<sup>Optional</sup> <a name="fromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue"></a>

```typescript
public readonly fromHeaderValue: string;
```

- *Type:* string

Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted.

Mutually exclusive with literalValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#from_header_value GoogleNetworkServicesTelemetryPolicy#from_header_value}

---

##### `literalValue`<sup>Optional</sup> <a name="literalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue"></a>

```typescript
public readonly literalValue: string;
```

- *Type:* string

Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName.

Mutually exclusive with fromHeaderValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#literal_value GoogleNetworkServicesTelemetryPolicy#literal_value}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

const googleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling: googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate">samplingRate</a></code> | <code>number</code> | Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

new googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

new googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesTelemetryPolicyTelemetryTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---


### GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

new googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesTelemetryPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

new googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

new googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue">resetFromHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue">resetLiteralValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromHeaderValue` <a name="resetFromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue"></a>

```typescript
public resetFromHeaderValue(): void
```

##### `resetLiteralValue` <a name="resetLiteralValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue"></a>

```typescript
public resetLiteralValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput">fromHeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput">literalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue">fromHeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue">literalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `fromHeaderValueInput`<sup>Optional</sup> <a name="fromHeaderValueInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput"></a>

```typescript
public readonly fromHeaderValueInput: string;
```

- *Type:* string

---

##### `literalValueInput`<sup>Optional</sup> <a name="literalValueInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput"></a>

```typescript
public readonly literalValueInput: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `fromHeaderValue`<sup>Required</sup> <a name="fromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue"></a>

```typescript
public readonly fromHeaderValue: string;
```

- *Type:* string

---

##### `literalValue`<sup>Required</sup> <a name="literalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue"></a>

```typescript
public readonly literalValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

new googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes">putCustomSpanAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling">putParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes">resetCustomSpanAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling">resetParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate">resetSamplingRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomSpanAttributes` <a name="putCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes"></a>

```typescript
public putCustomSpanAttributes(value: IResolvable | GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]

---

##### `putParentBasedSampling` <a name="putParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling"></a>

```typescript
public putParentBasedSampling(value: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `resetCustomSpanAttributes` <a name="resetCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes"></a>

```typescript
public resetCustomSpanAttributes(): void
```

##### `resetParentBasedSampling` <a name="resetParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling"></a>

```typescript
public resetParentBasedSampling(): void
```

##### `resetSamplingRate` <a name="resetSamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate"></a>

```typescript
public resetSamplingRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes">customSpanAttributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling">parentBasedSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput">customSpanAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput">parentBasedSamplingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput">samplingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSpanAttributes`<sup>Required</sup> <a name="customSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes"></a>

```typescript
public readonly customSpanAttributes: GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a>

---

##### `parentBasedSampling`<sup>Required</sup> <a name="parentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling"></a>

```typescript
public readonly parentBasedSampling: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a>

---

##### `customSpanAttributesInput`<sup>Optional</sup> <a name="customSpanAttributesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput"></a>

```typescript
public readonly customSpanAttributesInput: IResolvable | GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]

---

##### `parentBasedSamplingInput`<sup>Optional</sup> <a name="parentBasedSamplingInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput"></a>

```typescript
public readonly parentBasedSamplingInput: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput"></a>

```typescript
public readonly samplingRateInput: number;
```

- *Type:* number

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesTelemetryPolicyTracingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesTelemetryPolicy } from '@cdktn/provider-google-beta'

new googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate">resetSamplingRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSamplingRate` <a name="resetSamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate"></a>

```typescript
public resetSamplingRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput">samplingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput"></a>

```typescript
public readonly samplingRateInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---



