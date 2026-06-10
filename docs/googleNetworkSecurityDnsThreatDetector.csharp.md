# `googleNetworkSecurityDnsThreatDetector` Submodule <a name="`googleNetworkSecurityDnsThreatDetector` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityDnsThreatDetector <a name="GoogleNetworkSecurityDnsThreatDetector" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector google_network_security_dns_threat_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecurityDnsThreatDetector(Construct Scope, string Id, GoogleNetworkSecurityDnsThreatDetectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig">GoogleNetworkSecurityDnsThreatDetectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig">GoogleNetworkSecurityDnsThreatDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetExcludedNetworks">ResetExcludedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetThreatDetectorProvider">ResetThreatDetectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityDnsThreatDetectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetExcludedNetworks` <a name="ResetExcludedNetworks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetExcludedNetworks"></a>

```csharp
private void ResetExcludedNetworks()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetThreatDetectorProvider` <a name="ResetThreatDetectorProvider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetThreatDetectorProvider"></a>

```csharp
private void ResetThreatDetectorProvider()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecurityDnsThreatDetector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecurityDnsThreatDetector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecurityDnsThreatDetector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecurityDnsThreatDetector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityDnsThreatDetector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityDnsThreatDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityDnsThreatDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference">GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworksInput">ExcludedNetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput">ThreatDetectorProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworks">ExcludedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProvider">ThreatDetectorProvider</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference">GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `ExcludedNetworksInput`<sup>Optional</sup> <a name="ExcludedNetworksInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworksInput"></a>

```csharp
public string[] ExcludedNetworksInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ThreatDetectorProviderInput`<sup>Optional</sup> <a name="ThreatDetectorProviderInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput"></a>

```csharp
public string ThreatDetectorProviderInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkSecurityDnsThreatDetectorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `ExcludedNetworks`<sup>Required</sup> <a name="ExcludedNetworks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworks"></a>

```csharp
public string[] ExcludedNetworks { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ThreatDetectorProvider`<sup>Required</sup> <a name="ThreatDetectorProvider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProvider"></a>

```csharp
public string ThreatDetectorProvider { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityDnsThreatDetectorConfig <a name="GoogleNetworkSecurityDnsThreatDetectorConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecurityDnsThreatDetectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string DeletionPolicy = null,
    string[] ExcludedNetworks = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    string ThreatDetectorProvider = null,
    GoogleNetworkSecurityDnsThreatDetectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.name">Name</a></code> | <code>string</code> | Name of the DnsThreatDetector resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks">ExcludedNetworks</a></code> | <code>string[]</code> | List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#id GoogleNetworkSecurityDnsThreatDetector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the DNS Threat Detector resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.location">Location</a></code> | <code>string</code> | The location of the DNS Threat Detector. The only supported value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#project GoogleNetworkSecurityDnsThreatDetector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider">ThreatDetectorProvider</a></code> | <code>string</code> | DNS Threat Detection provider. The only supported value is 'INFOBLOX'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the DnsThreatDetector resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#name GoogleNetworkSecurityDnsThreatDetector#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#deletion_policy GoogleNetworkSecurityDnsThreatDetector#deletion_policy}

---

##### `ExcludedNetworks`<sup>Optional</sup> <a name="ExcludedNetworks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks"></a>

```csharp
public string[] ExcludedNetworks { get; set; }
```

- *Type:* string[]

List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#excluded_networks GoogleNetworkSecurityDnsThreatDetector#excluded_networks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#id GoogleNetworkSecurityDnsThreatDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the DNS Threat Detector resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#labels GoogleNetworkSecurityDnsThreatDetector#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the DNS Threat Detector. The only supported value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#location GoogleNetworkSecurityDnsThreatDetector#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#project GoogleNetworkSecurityDnsThreatDetector#project}.

---

##### `ThreatDetectorProvider`<sup>Optional</sup> <a name="ThreatDetectorProvider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider"></a>

```csharp
public string ThreatDetectorProvider { get; set; }
```

- *Type:* string

DNS Threat Detection provider. The only supported value is 'INFOBLOX'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#threat_detector_provider GoogleNetworkSecurityDnsThreatDetector#threat_detector_provider}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityDnsThreatDetectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#timeouts GoogleNetworkSecurityDnsThreatDetector#timeouts}

---

### GoogleNetworkSecurityDnsThreatDetectorTimeouts <a name="GoogleNetworkSecurityDnsThreatDetectorTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecurityDnsThreatDetectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#create GoogleNetworkSecurityDnsThreatDetector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#delete GoogleNetworkSecurityDnsThreatDetector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#update GoogleNetworkSecurityDnsThreatDetector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#create GoogleNetworkSecurityDnsThreatDetector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#delete GoogleNetworkSecurityDnsThreatDetector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_security_dns_threat_detector#update GoogleNetworkSecurityDnsThreatDetector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference <a name="GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkSecurityDnsThreatDetectorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

---



