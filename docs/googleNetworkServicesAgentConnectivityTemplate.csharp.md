# `googleNetworkServicesAgentConnectivityTemplate` Submodule <a name="`googleNetworkServicesAgentConnectivityTemplate` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAgentConnectivityTemplate <a name="GoogleNetworkServicesAgentConnectivityTemplate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template google_network_services_agent_connectivity_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplate(Construct Scope, string Id, GoogleNetworkServicesAgentConnectivityTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig">GoogleNetworkServicesAgentConnectivityTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig">GoogleNetworkServicesAgentConnectivityTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig">PutEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetAccessTypes">ResetAccessTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig">ResetEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressNetworkConfig` <a name="PutEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig"></a>

```csharp
private void PutEgressNetworkConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesAgentConnectivityTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `ResetAccessTypes` <a name="ResetAccessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetAccessTypes"></a>

```csharp
private void ResetAccessTypes()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEgressNetworkConfig` <a name="ResetEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig"></a>

```csharp
private void ResetEgressNetworkConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesAgentConnectivityTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesAgentConnectivityTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesAgentConnectivityTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesAgentConnectivityTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesAgentConnectivityTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesAgentConnectivityTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAgentConnectivityTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig">EgressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPathInput">AccessPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypesInput">AccessTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput">AgentConnectivityTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput">EgressNetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPath">AccessPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypes">AccessTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId">AgentConnectivityTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EgressNetworkConfig`<sup>Required</sup> <a name="EgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference EgressNetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeouts"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessPathInput`<sup>Optional</sup> <a name="AccessPathInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPathInput"></a>

```csharp
public string AccessPathInput { get; }
```

- *Type:* string

---

##### `AccessTypesInput`<sup>Optional</sup> <a name="AccessTypesInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypesInput"></a>

```csharp
public string[] AccessTypesInput { get; }
```

- *Type:* string[]

---

##### `AgentConnectivityTemplateIdInput`<sup>Optional</sup> <a name="AgentConnectivityTemplateIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput"></a>

```csharp
public string AgentConnectivityTemplateIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EgressNetworkConfigInput`<sup>Optional</sup> <a name="EgressNetworkConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig EgressNetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesAgentConnectivityTemplateTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `AccessPath`<sup>Required</sup> <a name="AccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPath"></a>

```csharp
public string AccessPath { get; }
```

- *Type:* string

---

##### `AccessTypes`<sup>Required</sup> <a name="AccessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypes"></a>

```csharp
public string[] AccessTypes { get; }
```

- *Type:* string[]

---

##### `AgentConnectivityTemplateId`<sup>Required</sup> <a name="AgentConnectivityTemplateId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId"></a>

```csharp
public string AgentConnectivityTemplateId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAgentConnectivityTemplateConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessPath,
    string AgentConnectivityTemplateId,
    string Location,
    string[] AccessTypes = null,
    string DeletionPolicy = null,
    string Description = null,
    GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig EgressNetworkConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkServicesAgentConnectivityTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessPath">AccessPath</a></code> | <code>string</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId">AgentConnectivityTemplateId</a></code> | <code>string</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessTypes">AccessTypes</a></code> | <code>string[]</code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig">EgressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessPath`<sup>Required</sup> <a name="AccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessPath"></a>

```csharp
public string AccessPath { get; set; }
```

- *Type:* string

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_path GoogleNetworkServicesAgentConnectivityTemplate#access_path}

---

##### `AgentConnectivityTemplateId`<sup>Required</sup> <a name="AgentConnectivityTemplateId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId"></a>

```csharp
public string AgentConnectivityTemplateId { get; set; }
```

- *Type:* string

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#agent_connectivity_template_id GoogleNetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#location GoogleNetworkServicesAgentConnectivityTemplate#location}

---

##### `AccessTypes`<sup>Optional</sup> <a name="AccessTypes" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessTypes"></a>

```csharp
public string[] AccessTypes { get; set; }
```

- *Type:* string[]

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_types GoogleNetworkServicesAgentConnectivityTemplate#access_types}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#deletion_policy GoogleNetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#description GoogleNetworkServicesAgentConnectivityTemplate#description}

---

##### `EgressNetworkConfig`<sup>Optional</sup> <a name="EgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig EgressNetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#egress_network_config GoogleNetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#labels GoogleNetworkServicesAgentConnectivityTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#timeouts GoogleNetworkServicesAgentConnectivityTemplate#timeouts}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig {
    GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig DnsPeeringConfig = null,
    string NetworkAttachment = null,
    GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig TlsConfig = null,
    string VpcEgress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig">DnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress">VpcEgress</a></code> | <code>string</code> | The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `DnsPeeringConfig`<sup>Optional</sup> <a name="DnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig DnsPeeringConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#dns_peering_config GoogleNetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#network_attachment GoogleNetworkServicesAgentConnectivityTemplate#network_attachment}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#tls_config GoogleNetworkServicesAgentConnectivityTemplate#tls_config}

---

##### `VpcEgress`<sup>Optional</sup> <a name="VpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress"></a>

```csharp
public string VpcEgress { get; set; }
```

- *Type:* string

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#vpc_egress GoogleNetworkServicesAgentConnectivityTemplate#vpc_egress}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig {
    string TargetNetwork,
    string Domain = null,
    string[] Domains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain">Domain</a></code> | <code>string</code> | The domain name to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains">Domains</a></code> | <code>string[]</code> | The list of domain names to peer for DNS resolution. |

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; set; }
```

- *Type:* string

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#target_network GoogleNetworkServicesAgentConnectivityTemplate#target_network}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domain GoogleNetworkServicesAgentConnectivityTemplate#domain}

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domains GoogleNetworkServicesAgentConnectivityTemplate#domains}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig {
    string AdditionalRoots,
    string TrustConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots">AdditionalRoots</a></code> | <code>string</code> | Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig">TrustConfig</a></code> | <code>string</code> | The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}. |

---

##### `AdditionalRoots`<sup>Required</sup> <a name="AdditionalRoots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots"></a>

```csharp
public string AdditionalRoots { get; set; }
```

- *Type:* string

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#additional_roots GoogleNetworkServicesAgentConnectivityTemplate#additional_roots}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig"></a>

```csharp
public string TrustConfig { get; set; }
```

- *Type:* string

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#trust_config GoogleNetworkServicesAgentConnectivityTemplate#trust_config}

---

### GoogleNetworkServicesAgentConnectivityTemplateTimeouts <a name="GoogleNetworkServicesAgentConnectivityTemplateTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```csharp
public string TargetNetworkInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig">PutDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig">ResetDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress">ResetVpcEgress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfig` <a name="PutDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```csharp
private void PutDnsPeeringConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig"></a>

```csharp
private void PutTlsConfig(GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `ResetDnsPeeringConfig` <a name="ResetDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```csharp
private void ResetDnsPeeringConfig()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```

##### `ResetVpcEgress` <a name="ResetVpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress"></a>

```csharp
private void ResetVpcEgress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig">DnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput">DnsPeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput">VpcEgressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress">VpcEgress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsPeeringConfig`<sup>Required</sup> <a name="DnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference DnsPeeringConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a>

---

##### `DnsPeeringConfigInput`<sup>Optional</sup> <a name="DnsPeeringConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig DnsPeeringConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `VpcEgressInput`<sup>Optional</sup> <a name="VpcEgressInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput"></a>

```csharp
public string VpcEgressInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `VpcEgress`<sup>Required</sup> <a name="VpcEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress"></a>

```csharp
public string VpcEgress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig"></a>

```csharp
private void ResetTrustConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput">AdditionalRootsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput">TrustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots">AdditionalRoots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig">TrustConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRootsInput`<sup>Optional</sup> <a name="AdditionalRootsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput"></a>

```csharp
public string AdditionalRootsInput { get; }
```

- *Type:* string

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput"></a>

```csharp
public string TrustConfigInput { get; }
```

- *Type:* string

---

##### `AdditionalRoots`<sup>Required</sup> <a name="AdditionalRoots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots"></a>

```csharp
public string AdditionalRoots { get; }
```

- *Type:* string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig"></a>

```csharp
public string TrustConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesAgentConnectivityTemplateTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---



