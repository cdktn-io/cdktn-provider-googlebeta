# `googleNetworkServicesTelemetryPolicy` Submodule <a name="`googleNetworkServicesTelemetryPolicy` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesTelemetryPolicy <a name="GoogleNetworkServicesTelemetryPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy google_network_services_telemetry_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicy(Construct Scope, string Id, GoogleNetworkServicesTelemetryPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig">GoogleNetworkServicesTelemetryPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig">GoogleNetworkServicesTelemetryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration">PutMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget">PutTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration">PutTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration">ResetMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration">ResetTracingConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricsConfiguration` <a name="PutMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration"></a>

```csharp
private void PutMetricsConfiguration(GoogleNetworkServicesTelemetryPolicyMetricsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `PutTelemetryTarget` <a name="PutTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget"></a>

```csharp
private void PutTelemetryTarget(GoogleNetworkServicesTelemetryPolicyTelemetryTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesTelemetryPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---

##### `PutTracingConfiguration` <a name="PutTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration"></a>

```csharp
private void PutTracingConfiguration(GoogleNetworkServicesTelemetryPolicyTracingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMetricsConfiguration` <a name="ResetMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration"></a>

```csharp
private void ResetMetricsConfiguration()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTracingConfiguration` <a name="ResetTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration"></a>

```csharp
private void ResetTracingConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesTelemetryPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesTelemetryPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesTelemetryPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesTelemetryPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesTelemetryPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesTelemetryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesTelemetryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration">MetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget">TelemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration">TracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput">MetricsConfigurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput">TelemetryTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput">TracingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `MetricsConfiguration`<sup>Required</sup> <a name="MetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference MetricsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a>

---

##### `TelemetryTarget`<sup>Required</sup> <a name="TelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference TelemetryTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a>

---

##### `TracingConfiguration`<sup>Required</sup> <a name="TracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference TracingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetricsConfigurationInput`<sup>Optional</sup> <a name="MetricsConfigurationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyMetricsConfiguration MetricsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TelemetryTargetInput`<sup>Optional</sup> <a name="TelemetryTargetInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTelemetryTarget TelemetryTargetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesTelemetryPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---

##### `TracingConfigurationInput`<sup>Optional</sup> <a name="TracingConfigurationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfiguration TracingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesTelemetryPolicyConfig <a name="GoogleNetworkServicesTelemetryPolicyConfig" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    GoogleNetworkServicesTelemetryPolicyTelemetryTarget TelemetryTarget,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    GoogleNetworkServicesTelemetryPolicyMetricsConfiguration MetricsConfiguration = null,
    string Project = null,
    GoogleNetworkServicesTelemetryPolicyTimeouts Timeouts = null,
    GoogleNetworkServicesTelemetryPolicyTracingConfiguration TracingConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name">Name</a></code> | <code>string</code> | Short name of the TelemetryPolicy resource to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget">TelemetryTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | telemetry_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Provides a human-readable name for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the TelemetryPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location">Location</a></code> | <code>string</code> | Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration">MetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | metrics_configuration block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration">TracingConfiguration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | tracing_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Short name of the TelemetryPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#name GoogleNetworkServicesTelemetryPolicy#name}

---

##### `TelemetryTarget`<sup>Required</sup> <a name="TelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTelemetryTarget TelemetryTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

telemetry_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#telemetry_target GoogleNetworkServicesTelemetryPolicy#telemetry_target}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
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

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Provides a human-readable name for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#display_name GoogleNetworkServicesTelemetryPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the TelemetryPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#labels GoogleNetworkServicesTelemetryPolicy#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#location GoogleNetworkServicesTelemetryPolicy#location}

---

##### `MetricsConfiguration`<sup>Optional</sup> <a name="MetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyMetricsConfiguration MetricsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

metrics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#metrics_configuration GoogleNetworkServicesTelemetryPolicy#metrics_configuration}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#timeouts GoogleNetworkServicesTelemetryPolicy#timeouts}

---

##### `TracingConfiguration`<sup>Optional</sup> <a name="TracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfiguration TracingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#tracing_configuration GoogleNetworkServicesTelemetryPolicy#tracing_configuration}

---

### GoogleNetworkServicesTelemetryPolicyMetricsConfiguration <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyMetricsConfiguration {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

### GoogleNetworkServicesTelemetryPolicyTelemetryTarget <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTelemetryTarget {
    string[] Resources
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources">Resources</a></code> | <code>string[]</code> | Lists references to the resources that are targeted by the policy. |

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Lists references to the resources that are targeted by the policy.

Types of resources supported:

* 'run.googleapis.com/'
* 'compute.googleapis.com/'
* 'networkservices.googleapis.com/'
  The format must be the full resource name of a supported resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#resources GoogleNetworkServicesTelemetryPolicy#resources}

---

### GoogleNetworkServicesTelemetryPolicyTimeouts <a name="GoogleNetworkServicesTelemetryPolicyTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}.

---

### GoogleNetworkServicesTelemetryPolicyTracingConfiguration <a name="GoogleNetworkServicesTelemetryPolicyTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTracingConfiguration {
    IResolvable|GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[] CustomSpanAttributes = null,
    GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling ParentBasedSampling = null,
    double SamplingRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes">CustomSpanAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]</code> | custom_span_attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling">ParentBasedSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | parent_based_sampling block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate">SamplingRate</a></code> | <code>double</code> | Specifies the tracing sampling rate. |

---

##### `CustomSpanAttributes`<sup>Optional</sup> <a name="CustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes"></a>

```csharp
public IResolvable|GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[] CustomSpanAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]

custom_span_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#custom_span_attributes GoogleNetworkServicesTelemetryPolicy#custom_span_attributes}

---

##### `ParentBasedSampling`<sup>Optional</sup> <a name="ParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling ParentBasedSampling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

parent_based_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#parent_based_sampling GoogleNetworkServicesTelemetryPolicy#parent_based_sampling}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate"></a>

```csharp
public double SamplingRate { get; set; }
```

- *Type:* double

Specifies the tracing sampling rate.

The sampling rate is a float number in the interval [0, 1]. The sampling rate is applied to all requests to the targeted resources. The default value is 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes {
    string AttributeName,
    string FromHeaderValue = null,
    string LiteralValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName">AttributeName</a></code> | <code>string</code> | Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue">FromHeaderValue</a></code> | <code>string</code> | Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue">LiteralValue</a></code> | <code>string</code> | Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName. |

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#attribute_name GoogleNetworkServicesTelemetryPolicy#attribute_name}

---

##### `FromHeaderValue`<sup>Optional</sup> <a name="FromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue"></a>

```csharp
public string FromHeaderValue { get; set; }
```

- *Type:* string

Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted.

Mutually exclusive with literalValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#from_header_value GoogleNetworkServicesTelemetryPolicy#from_header_value}

---

##### `LiteralValue`<sup>Optional</sup> <a name="LiteralValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue"></a>

```csharp
public string LiteralValue { get; set; }
```

- *Type:* string

Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName.

Mutually exclusive with fromHeaderValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#literal_value GoogleNetworkServicesTelemetryPolicy#literal_value}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling {
    bool|IResolvable Enabled = null,
    double SamplingRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate">SamplingRate</a></code> | <code>double</code> | Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate"></a>

```csharp
public double SamplingRate { get; set; }
```

- *Type:* double

Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyMetricsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTelemetryTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---


### GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTelemetryPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get"></a>

```csharp
private GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue">ResetFromHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue">ResetLiteralValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromHeaderValue` <a name="ResetFromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue"></a>

```csharp
private void ResetFromHeaderValue()
```

##### `ResetLiteralValue` <a name="ResetLiteralValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue"></a>

```csharp
private void ResetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput">FromHeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput">LiteralValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue">FromHeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue">LiteralValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `FromHeaderValueInput`<sup>Optional</sup> <a name="FromHeaderValueInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput"></a>

```csharp
public string FromHeaderValueInput { get; }
```

- *Type:* string

---

##### `LiteralValueInput`<sup>Optional</sup> <a name="LiteralValueInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput"></a>

```csharp
public string LiteralValueInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `FromHeaderValue`<sup>Required</sup> <a name="FromHeaderValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue"></a>

```csharp
public string FromHeaderValue { get; }
```

- *Type:* string

---

##### `LiteralValue`<sup>Required</sup> <a name="LiteralValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue"></a>

```csharp
public string LiteralValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes">PutCustomSpanAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling">PutParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes">ResetCustomSpanAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling">ResetParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomSpanAttributes` <a name="PutCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes"></a>

```csharp
private void PutCustomSpanAttributes(IResolvable|GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]

---

##### `PutParentBasedSampling` <a name="PutParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling"></a>

```csharp
private void PutParentBasedSampling(GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `ResetCustomSpanAttributes` <a name="ResetCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes"></a>

```csharp
private void ResetCustomSpanAttributes()
```

##### `ResetParentBasedSampling` <a name="ResetParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling"></a>

```csharp
private void ResetParentBasedSampling()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate"></a>

```csharp
private void ResetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes">CustomSpanAttributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling">ParentBasedSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput">CustomSpanAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput">ParentBasedSamplingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate">SamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomSpanAttributes`<sup>Required</sup> <a name="CustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList CustomSpanAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a>

---

##### `ParentBasedSampling`<sup>Required</sup> <a name="ParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference ParentBasedSampling { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a>

---

##### `CustomSpanAttributesInput`<sup>Optional</sup> <a name="CustomSpanAttributesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[] CustomSpanAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>[]

---

##### `ParentBasedSamplingInput`<sup>Optional</sup> <a name="ParentBasedSamplingInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling ParentBasedSamplingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput"></a>

```csharp
public double SamplingRateInput { get; }
```

- *Type:* double

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate"></a>

```csharp
public double SamplingRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate"></a>

```csharp
private void ResetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate">SamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput"></a>

```csharp
public double SamplingRateInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate"></a>

```csharp
public double SamplingRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---



