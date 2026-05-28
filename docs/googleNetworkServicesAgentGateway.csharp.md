# `googleNetworkServicesAgentGateway` Submodule <a name="`googleNetworkServicesAgentGateway` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAgentGateway <a name="GoogleNetworkServicesAgentGateway" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway google_network_services_agent_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGateway(Construct Scope, string Id, GoogleNetworkServicesAgentGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig">GoogleNetworkServicesAgentGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig">GoogleNetworkServicesAgentGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged">PutGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged">PutSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetGoogleManaged">ResetGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetRegistries">ResetRegistries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetSelfManaged">ResetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGoogleManaged` <a name="PutGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged"></a>

```csharp
private void PutGoogleManaged(GoogleNetworkServicesAgentGatewayGoogleManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(GoogleNetworkServicesAgentGatewayNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---

##### `PutSelfManaged` <a name="PutSelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged"></a>

```csharp
private void PutSelfManaged(GoogleNetworkServicesAgentGatewaySelfManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesAgentGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGoogleManaged` <a name="ResetGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetGoogleManaged"></a>

```csharp
private void ResetGoogleManaged()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegistries` <a name="ResetRegistries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetRegistries"></a>

```csharp
private void ResetRegistries()
```

##### `ResetSelfManaged` <a name="ResetSelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetSelfManaged"></a>

```csharp
private void ResetSelfManaged()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesAgentGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesAgentGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesAgentGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesAgentGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesAgentGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesAgentGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAgentGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.agentGatewayCard">AgentGatewayCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList">GoogleNetworkServicesAgentGatewayAgentGatewayCardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManaged">GoogleManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference">GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference">GoogleNetworkServicesAgentGatewaySelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference">GoogleNetworkServicesAgentGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManagedInput">GoogleManagedInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registriesInput">RegistriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManagedInput">SelfManagedInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registries">Registries</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentGatewayCard`<sup>Required</sup> <a name="AgentGatewayCard" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.agentGatewayCard"></a>

```csharp
public GoogleNetworkServicesAgentGatewayAgentGatewayCardList AgentGatewayCard { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList">GoogleNetworkServicesAgentGatewayAgentGatewayCardList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `GoogleManaged`<sup>Required</sup> <a name="GoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManaged"></a>

```csharp
public GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference GoogleManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference">GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfig"></a>

```csharp
public GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference</a>

---

##### `SelfManaged`<sup>Required</sup> <a name="SelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManaged"></a>

```csharp
public GoogleNetworkServicesAgentGatewaySelfManagedOutputReference SelfManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference">GoogleNetworkServicesAgentGatewaySelfManagedOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeouts"></a>

```csharp
public GoogleNetworkServicesAgentGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference">GoogleNetworkServicesAgentGatewayTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GoogleManagedInput`<sup>Optional</sup> <a name="GoogleManagedInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManagedInput"></a>

```csharp
public GoogleNetworkServicesAgentGatewayGoogleManaged GoogleManagedInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfigInput"></a>

```csharp
public GoogleNetworkServicesAgentGatewayNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `RegistriesInput`<sup>Optional</sup> <a name="RegistriesInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registriesInput"></a>

```csharp
public string[] RegistriesInput { get; }
```

- *Type:* string[]

---

##### `SelfManagedInput`<sup>Optional</sup> <a name="SelfManagedInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManagedInput"></a>

```csharp
public GoogleNetworkServicesAgentGatewaySelfManaged SelfManagedInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesAgentGatewayTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `Registries`<sup>Required</sup> <a name="Registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registries"></a>

```csharp
public string[] Registries { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAgentGatewayAgentGatewayCard <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCard" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayAgentGatewayCard {

};
```


### GoogleNetworkServicesAgentGatewayConfig <a name="GoogleNetworkServicesAgentGatewayConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string[] Protocols,
    string DeletionPolicy = null,
    string Description = null,
    GoogleNetworkServicesAgentGatewayGoogleManaged GoogleManaged = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleNetworkServicesAgentGatewayNetworkConfig NetworkConfig = null,
    string Project = null,
    string[] Registries = null,
    GoogleNetworkServicesAgentGatewaySelfManaged SelfManaged = null,
    GoogleNetworkServicesAgentGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.location">Location</a></code> | <code>string</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.name">Name</a></code> | <code>string</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.protocols">Protocols</a></code> | <code>string[]</code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.googleManaged">GoogleManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.registries">Registries</a></code> | <code>string[]</code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#location GoogleNetworkServicesAgentGateway#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#name GoogleNetworkServicesAgentGateway#name}

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#protocols GoogleNetworkServicesAgentGateway#protocols}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#deletion_policy GoogleNetworkServicesAgentGateway#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#description GoogleNetworkServicesAgentGateway#description}

---

##### `GoogleManaged`<sup>Optional</sup> <a name="GoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.googleManaged"></a>

```csharp
public GoogleNetworkServicesAgentGatewayGoogleManaged GoogleManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#google_managed GoogleNetworkServicesAgentGateway#google_managed}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#labels GoogleNetworkServicesAgentGateway#labels}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.networkConfig"></a>

```csharp
public GoogleNetworkServicesAgentGatewayNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#network_config GoogleNetworkServicesAgentGateway#network_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}.

---

##### `Registries`<sup>Optional</sup> <a name="Registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.registries"></a>

```csharp
public string[] Registries { get; set; }
```

- *Type:* string[]

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#registries GoogleNetworkServicesAgentGateway#registries}

---

##### `SelfManaged`<sup>Optional</sup> <a name="SelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.selfManaged"></a>

```csharp
public GoogleNetworkServicesAgentGatewaySelfManaged SelfManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#self_managed GoogleNetworkServicesAgentGateway#self_managed}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesAgentGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#timeouts GoogleNetworkServicesAgentGateway#timeouts}

---

### GoogleNetworkServicesAgentGatewayGoogleManaged <a name="GoogleNetworkServicesAgentGatewayGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayGoogleManaged {
    string GovernedAccessPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath">GovernedAccessPath</a></code> | <code>string</code> | Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"]. |

---

##### `GovernedAccessPath`<sup>Required</sup> <a name="GovernedAccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath"></a>

```csharp
public string GovernedAccessPath { get; set; }
```

- *Type:* string

Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#governed_access_path GoogleNetworkServicesAgentGateway#governed_access_path}

---

### GoogleNetworkServicesAgentGatewayNetworkConfig <a name="GoogleNetworkServicesAgentGatewayNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayNetworkConfig {
    GoogleNetworkServicesAgentGatewayNetworkConfigEgress Egress
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.property.egress">Egress</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | egress block. |

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.property.egress"></a>

```csharp
public GoogleNetworkServicesAgentGatewayNetworkConfigEgress Egress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#egress GoogleNetworkServicesAgentGateway#egress}

---

### GoogleNetworkServicesAgentGatewayNetworkConfigEgress <a name="GoogleNetworkServicesAgentGatewayNetworkConfigEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayNetworkConfigEgress {
    string NetworkAttachment
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The URI of the Network Attachment resource. |

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The URI of the Network Attachment resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#network_attachment GoogleNetworkServicesAgentGateway#network_attachment}

---

### GoogleNetworkServicesAgentGatewaySelfManaged <a name="GoogleNetworkServicesAgentGatewaySelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewaySelfManaged {
    string ResourceUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.property.resourceUri">ResourceUri</a></code> | <code>string</code> | A supported Google Cloud networking proxy in the Project and Location. |

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.property.resourceUri"></a>

```csharp
public string ResourceUri { get; set; }
```

- *Type:* string

A supported Google Cloud networking proxy in the Project and Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#resource_uri GoogleNetworkServicesAgentGateway#resource_uri}

---

### GoogleNetworkServicesAgentGatewayTimeouts <a name="GoogleNetworkServicesAgentGatewayTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAgentGatewayAgentGatewayCardList <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCardList" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayAgentGatewayCardList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get"></a>

```csharp
private GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint">MtlsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates">RootCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount">ServiceExtensionsServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard">GoogleNetworkServicesAgentGatewayAgentGatewayCard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MtlsEndpoint`<sup>Required</sup> <a name="MtlsEndpoint" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint"></a>

```csharp
public string MtlsEndpoint { get; }
```

- *Type:* string

---

##### `RootCertificates`<sup>Required</sup> <a name="RootCertificates" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates"></a>

```csharp
public string[] RootCertificates { get; }
```

- *Type:* string[]

---

##### `ServiceExtensionsServiceAccount`<sup>Required</sup> <a name="ServiceExtensionsServiceAccount" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount"></a>

```csharp
public string ServiceExtensionsServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesAgentGatewayAgentGatewayCard InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard">GoogleNetworkServicesAgentGatewayAgentGatewayCard</a>

---


### GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference <a name="GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput">GovernedAccessPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath">GovernedAccessPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GovernedAccessPathInput`<sup>Optional</sup> <a name="GovernedAccessPathInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput"></a>

```csharp
public string GovernedAccessPathInput { get; }
```

- *Type:* string

---

##### `GovernedAccessPath`<sup>Required</sup> <a name="GovernedAccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath"></a>

```csharp
public string GovernedAccessPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesAgentGatewayGoogleManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---


### GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference <a name="GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesAgentGatewayNetworkConfigEgress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---


### GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference <a name="GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress">PutEgress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgress` <a name="PutEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress"></a>

```csharp
private void PutEgress(GoogleNetworkServicesAgentGatewayNetworkConfigEgress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress">Egress</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput">EgressInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress"></a>

```csharp
public GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference Egress { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a>

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput"></a>

```csharp
public GoogleNetworkServicesAgentGatewayNetworkConfigEgress EgressInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesAgentGatewayNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---


### GoogleNetworkServicesAgentGatewaySelfManagedOutputReference <a name="GoogleNetworkServicesAgentGatewaySelfManagedOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewaySelfManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput">ResourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri">ResourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceUriInput`<sup>Optional</sup> <a name="ResourceUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput"></a>

```csharp
public string ResourceUriInput { get; }
```

- *Type:* string

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri"></a>

```csharp
public string ResourceUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesAgentGatewaySelfManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---


### GoogleNetworkServicesAgentGatewayTimeoutsOutputReference <a name="GoogleNetworkServicesAgentGatewayTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesAgentGatewayTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---



